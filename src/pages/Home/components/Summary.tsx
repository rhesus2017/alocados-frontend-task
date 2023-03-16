import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { coinWallet } from "../../../recoil/atom";
import CoinWallet from "./CoinWallet";

const Summary = () => {
  const coin = useRecoilValue(coinWallet);

  return (
    <SummaryStyled>
      <p>요약</p>
      <div className="coinWrap">
        {Object.keys(coin).map((key) => (
          <CoinWallet key={key} coin={coin[key]} />
        ))}
      </div>
    </SummaryStyled>
  );
};

export default Summary;

const SummaryStyled = styled.div`
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
