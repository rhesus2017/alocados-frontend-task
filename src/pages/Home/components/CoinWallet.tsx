import styled from "styled-components";
import { CoinWalletType } from "../../../interface/atom";
import Icon from "../../../components/Icon";

interface Props {
  coin: CoinWalletType;
}

const CoinWallet = (props: Props) => {
  const { coin } = props;

  return (
    <CoinWalletStyled>
      <div className="top">
        <div className="border">
          <Icon width={36} height={36} img={coin.key} />
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

    > .border {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(42, 50, 73, 0.05);
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
