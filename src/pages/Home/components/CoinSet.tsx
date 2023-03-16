import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { selectedCoin, coinWallets } from "../../../recoil/atoms";
import Input from "./Input";
import Select from "./Select";

interface Props {
  type: "from" | "to";
}

const CoinSet = (props: Props) => {
  const { type } = props;
  const [getSelectedCoin, setSelectedCoin] = useRecoilState(selectedCoin);
  const getCoinWallets = useRecoilValue(coinWallets);

  const onSelect = (key: string) => {
    setSelectedCoin((state) => ({
      ...state,
      from: { ...state.from, quantity: "0" },
      to: { ...state.to, quantity: "0" },
      [type]: { ...getCoinWallets[key], quantity: "0" },
    }));
  };

  const onChange = (value: string) => {
    setSelectedCoin((state) => ({
      ...state,
      [type]: { ...state[type], quantity: value },
    }));
  };

  return (
    <CoinSetStyled>
      <Input
        type={type}
        value={getSelectedCoin[type].quantity}
        onChange={(value) => onChange(value)}
      />
      <Select
        name={getSelectedCoin[type].name}
        iconKey={getSelectedCoin[type].key}
        options={getCoinWallets}
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
