/* eslint-disable react-hooks/exhaustive-deps */
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import styled from "styled-components";
import {
  selectedCoinsState,
  coinWalletsState,
  isErrorState,
  openSelectsState,
  isSelectedAllState,
} from "../../../recoil/atoms";
import { getFromValue, getToValue } from "../../../utils/utils";
import Input from "./Input";
import Select from "./Select";

interface Props {
  type: "from" | "to";
}

const CoinSet = (props: Props) => {
  const { type } = props;
  const [selectedCoins, setSelectedCoins] = useRecoilState(selectedCoinsState);
  const setIsSelectedAll = useSetRecoilState(isSelectedAllState);
  const [openSelects, setOpenSelects] = useRecoilState(openSelectsState);
  const [isError, setIsError] = useRecoilState(isErrorState);
  const coinWallets = useRecoilValue(coinWalletsState);

  const onChange = (value: string) => {
    if (!selectedCoins.from.key || !selectedCoins.to.key) return;
    if (value.split(".").length > 2 || isNaN(Number(value))) return;

    setIsError(!value || !Number(value));

    setSelectedCoins((state) => ({
      ...state,
      from: {
        ...state.from,
        input: getFromValue(value, coinWallets[state.from.key].quantity),
      },
      to: {
        ...state.to,
        input: getToValue(
          getFromValue(value, coinWallets[state.from.key].quantity),
          selectedCoins
        ),
      },
    }));
  };

  const onSelect = (key: string) => {
    setSelectedCoins((state) => ({
      ...state,
      [type]: {
        ...coinWallets[key],
        input:
          type === "from" && state.from.key !== key ? "0" : state[type].input,
      },
    }));
  };

  const onToggle = () => {
    setOpenSelects((state) => (state !== type ? type : ""));
  };

  useEffect(() => {
    setSelectedCoins((state) => ({
      ...state,
      to: {
        ...state.to,
        input: getToValue(state.from.input, selectedCoins),
      },
    }));

    setIsSelectedAll(
      Boolean(selectedCoins.from.key) &&
        Boolean(selectedCoins.to.key) &&
        selectedCoins.from.key !== selectedCoins.to.key
    );
  }, [selectedCoins.from.key, selectedCoins.to.key]);

  return (
    <CoinSetStyled>
      <Input
        value={selectedCoins[type].input}
        readOnly={type !== "from"}
        error={isError}
        onChange={(value) => onChange(value)}
      />
      <Select
        selected={selectedCoins[type]}
        isOpen={openSelects === type}
        options={Object.keys(coinWallets).map((key) => coinWallets[key])}
        onSelect={(key) => onSelect(key)}
        onToggle={onToggle}
      />
    </CoinSetStyled>
  );
};

export default CoinSet;

const CoinSetStyled = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  gap: 16px;
`;
