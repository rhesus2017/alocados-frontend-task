import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import styled from "styled-components";
import { selectedCoin, coinWallets, isError } from "../../../recoil/atoms";
import { getFromValue, getToValue } from "../../../utils/utils";
import Input from "./Input";
import Select from "./Select";

interface Props {
  type: "from" | "to";
}

const CoinSet = (props: Props) => {
  const { type } = props;
  const [getSelectedCoin, setSelectedCoin] = useRecoilState(selectedCoin);
  const [getisError, setIsError] = useRecoilState(isError);
  const getCoinWallets = useRecoilValue(coinWallets);

  const onSelect = (key: string) => {
    setSelectedCoin((state) => ({
      ...state,
      from: {
        ...state.from,
        input:
          type === "from" && state.from.key !== key ? "0" : state.from.input,
      },
      [type]: {
        ...getCoinWallets[key],
        input:
          type === "from" && state.from.key !== key ? "0" : state.from.input,
      },
    }));
  };

  const onChange = (value: string) => {
    if (!getSelectedCoin.from.key || !getSelectedCoin.to.key) return;
    if (!value || value === "0") setIsError(true);

    setSelectedCoin((state) => ({
      ...state,
      from: {
        ...state.from,
        input:
          Number(getFromValue(value)) >
          Number(getCoinWallets[state.from.key].quantity)
            ? getCoinWallets[state.from.key].quantity
            : getFromValue(value),
      },
    }));
  };

  useEffect(() => {
    setSelectedCoin((state) => ({
      ...state,
      to: {
        ...state.to,
        input: getToValue(getSelectedCoin),
      },
    }));
  }, [getSelectedCoin.from, getSelectedCoin.to.key]);

  return (
    <CoinSetStyled>
      <Input
        type={type}
        value={getSelectedCoin[type].input}
        error={getisError}
        onChange={(value) => onChange(value)}
      />
      <Select
        type={type}
        name={getSelectedCoin[type].name}
        iconKey={getSelectedCoin[type].key}
        options={Object.keys(getCoinWallets)
          .map((key) => getCoinWallets[key])
          .filter(
            (item) =>
              (type === "from" && item.key !== getSelectedCoin.to.key) ||
              (type === "to" && item.key !== getSelectedCoin.from.key)
          )}
        onSelect={(key) => onSelect(key)}
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
