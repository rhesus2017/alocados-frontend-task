import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { coinWallets } from "../../../recoil/atoms";
import CoinWallet from "./CoinWallet";

const Wallet = () => {
  const getCoinWallets = useRecoilValue(coinWallets);

  return (
    <WalletStyled>
      <p>요약</p>
      <div className="coinWrap">
        {Object.keys(getCoinWallets).map((key) => (
          <CoinWallet key={key} coinWallet={getCoinWallets[key]} />
        ))}
      </div>
    </WalletStyled>
  );
};

export default Wallet;

const WalletStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background: #fafbfc;
  border-radius: 12px;
  width: 308px;

  > p {
    padding-bottom: 16px;
    color: #4c5b7a;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.025em;
    border-bottom: 2px solid rgba(200, 204, 215, 1);
  }

  .coinWrap {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;
