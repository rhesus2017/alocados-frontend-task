import styled from "styled-components";
import CoinSet from "./CoinSet";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import {
  coinWalletsState,
  isErrorState,
  isMessageState,
  isSelectedAllState,
  selectedCoinsState,
  swapHistoryState,
} from "../../../recoil/atoms";
import { getMinusResult, getPlusResult } from "../../../utils/utils";
import moment from "moment";
import HistoryCard from "../../../components/HistoryCard";

const Swap = () => {
  const selectedCoins = useRecoilValue(selectedCoinsState);
  const isError = useRecoilValue(isErrorState);
  const isSelectedAll = useRecoilValue(isSelectedAllState);
  const setCoinWallets = useSetRecoilState(coinWalletsState);
  const setIsMessage = useSetRecoilState(isMessageState);
  const resetSelectedCoins = useResetRecoilState(selectedCoinsState);
  const [swapHistory, setSwapHistory] = useRecoilState(swapHistoryState);

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
    setIsMessage(true);

    setSwapHistory((state) => [
      ...state,
      {
        date: moment().format("YYYY-MM-DD A hh:mm"),
        ...selectedCoins,
      },
    ]);
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
          disabled={
            isError || !isSelectedAll || selectedCoins.from.input === "0"
          }
        />
      </div>
      <div className="cardWrap">
        {swapHistory
          .filter((_item, index, items) => index === items.length - 1)
          .map((item, index) => (
            <HistoryCard key={index} item={item} />
          ))}
      </div>
    </SwapStyled>
  );
};

export default Swap;

const SwapStyled = styled.div`
  flex-grow: 1;
  position: relative;

  > .iconWrap {
    margin: 24px auto;
    display: flex;
    justify-content: center;
  }

  > .buttonWrap {
    margin-top: 47px;
  }

  .cardWrap {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
