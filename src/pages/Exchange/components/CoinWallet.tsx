import styled from "styled-components";
import { CoinWalletType } from "../../../interface/atom";
import solana from "../../../assets/svg/solana.svg";
import ethereum from "../../../assets/svg/ethereum.svg";
import bnb from "../../../assets/svg/bnb.svg";

interface Props {
  coin: CoinWalletType;
}

const CoinWallet = (props: Props) => {
  const { coin } = props;

  return (
    <CoinWalletStyled>
      <div className="top">
        <div className="img">
          <img
            src={
              coin.code === "SOL"
                ? solana
                : coin.code === "ETH"
                ? ethereum
                : coin.code === "BNB"
                ? bnb
                : ""
            }
            alt={coin.text}
          />
        </div>
        <span className="text">{coin.text}</span>
      </div>
      <div className="bottom">
        {coin.quantity.toLocaleString(undefined, {
          minimumFractionDigits: 2,
        })}{" "}
        {coin.code}
      </div>
    </CoinWalletStyled>
  );
};

export default CoinWallet;

const CoinWalletStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  .top {
    display: flex;
    gap: 4px;

    .img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(42, 50, 73, 0.05);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .text {
      font-family: "Poppins";
      font-weight: 400;
      font-size: 18px;
      color: #4c5b7a;
      line-height: 36px;
    }
  }

  .bottom {
    font-family: "Poppins";
    font-weight: 600;
    font-size: 18px;
    color: #2a3249;
    line-height: 178%;
  }
`;
