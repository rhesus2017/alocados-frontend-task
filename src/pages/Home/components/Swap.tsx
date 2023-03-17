import styled from "styled-components";
import CoinSet from "./CoinSet";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import {
  coinWalletsState,
  isErrorState,
  selectedCoinsState,
} from "../../../recoil/atoms";
import { getMinusResult, getPlusResult } from "../../../utils/utils";

const Swap = () => {
  const selectedCoins = useRecoilValue(selectedCoinsState);
  const isError = useRecoilValue(isErrorState);
  const setCoinWallets = useSetRecoilState(coinWalletsState);
  const resetSelectedCoins = useResetRecoilState(selectedCoinsState);

  const handleSwapClick = () => {
    setCoinWallets((state) => ({
      ...state,
      [selectedCoins.from.key]: {
        ...state[selectedCoins.from.key],
        quantity: getMinusResult(
          state[selectedCoins.from.key].quantity,
          selectedCoins.from.input
        ),
      },
      [selectedCoins.to.key]: {
        ...state[selectedCoins.to.key],
        quantity: getPlusResult(
          state[selectedCoins.to.key].quantity,
          selectedCoins.to.input
        ),
      },
    }));

    resetSelectedCoins();
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
          disabled={isError}
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
