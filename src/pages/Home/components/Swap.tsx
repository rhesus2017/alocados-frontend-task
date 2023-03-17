import styled from "styled-components";
import CoinSet from "./CoinSet";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import { useRecoilState } from "recoil";
import { coinWallets, selectedCoin } from "../../../recoil/atoms";
import Big from "big.js";

const Swap = () => {
  const [getCoinWallets, setCoinWallets] = useRecoilState(coinWallets);
  const [getSelectedCoin, setSelectedCoin] = useRecoilState(selectedCoin);

  const handleSwapClick = () => {
    const fromCoin = getSelectedCoin.from;
    const toCoin = getSelectedCoin.to;

    setCoinWallets((state) => ({
      ...state,
      [fromCoin.key]: {
        ...state[fromCoin.key],
        quantity: Big(state[fromCoin.key].quantity)
          .minus(fromCoin.input)
          .toString(),
      },
      [toCoin.key]: {
        ...state[toCoin.key],
        quantity: Big(state[toCoin.key].quantity).plus(toCoin.input).toString(),
      },
    }));
  };

  return (
    <SwapStyled>
      <CoinSet type="from" />
      <div className="iconWrap">
        <Icon width={40} height={40} iconKey="swap" />
      </div>
      <CoinSet type="to" />
      <div className="buttonWrap">
        <Button
          type="primary"
          label="환전"
          onClick={handleSwapClick}
          disabled={!getSelectedCoin.from.key || !getSelectedCoin.to.key}
        />
      </div>
    </SwapStyled>
  );
};

export default Swap;

const SwapStyled = styled.div`
  flex-grow: 1;

  .buttonWrap {
    margin-top: 47px;
  }

  > .iconWrap {
    margin: 24px auto;
    display: flex;
    justify-content: center;
  }
`;
