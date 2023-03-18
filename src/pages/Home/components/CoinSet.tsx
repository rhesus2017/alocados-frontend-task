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
import Input from "./Input";
import Select from "./Select";
import useTransformValue from "../../../hooks/useTransformValue";
import useInput from "../../../hooks/useInput";
import useSelect from "../../../hooks/useSelect";

interface Props {
  type: "from" | "to";
}

const CoinSet = (props: Props) => {
  const { type } = props;
  const [selectedCoins, setSelectedCoins] = useRecoilState(selectedCoinsState);
  const [isError, setIsError] = useRecoilState(isErrorState);
  const openSelects = useRecoilValue(openSelectsState);
  const coinWallets = useRecoilValue(coinWalletsState);
  const setIsSelectedAll = useSetRecoilState(isSelectedAllState);
  const { getToValue } = useTransformValue();
  const { onChange } = useInput();
  const { onSelect, onToggle } = useSelect();

  useEffect(() => {
    setSelectedCoins((state) => ({
      ...state,
      to: {
        ...state.to,
        input: getToValue(state.from.input),
      },
    }));

    setIsSelectedAll(
      Boolean(selectedCoins.from.key) &&
        Boolean(selectedCoins.to.key) &&
        selectedCoins.from.key !== selectedCoins.to.key
    );
  }, [selectedCoins.from.key, selectedCoins.to.key]);

  useEffect(() => {
    setIsError(!selectedCoins.from.input || !Number(selectedCoins.from.input));
  }, [selectedCoins.from.input]);

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
        onSelect={(key) => onSelect(key, type)}
        onToggle={() => onToggle(type)}
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
