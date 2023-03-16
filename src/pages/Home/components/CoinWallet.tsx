import styled from "styled-components";
import { CoinWalletType } from "../../../type/atom";
import Icon from "../../../components/Icon";
import { numberFormat } from "../../../utils/utils";

interface Props {
  coinWallet: CoinWalletType;
}

const CoinWallet = (props: Props) => {
  const { coinWallet } = props;

  return (
    <CoinWalletStyled>
      <div className="top">
        <div className="iconWrap">
          <Icon width={36} height={36} iconKey={coinWallet.key} />
        </div>
        <span className="name">{coinWallet.name}</span>
      </div>
      <div className="bottom">
        {numberFormat(coinWallet.quantity)} {coinWallet.code}
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

    > .iconWrap {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(42, 50, 73, 0.05);
    }

    .name {
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
