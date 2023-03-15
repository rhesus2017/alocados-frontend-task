import styled from "styled-components";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Summary from "./components/Summary";
import Swap from "./components/Swap";

const Exchange = () => {
  return (
    <ExchangeStyled>
      <Header />
      <main>
        <Title title="환전하기" />
        <div className="content">
          <Summary />
          <Swap />
        </div>
      </main>
    </ExchangeStyled>
  );
};

export default Exchange;

const ExchangeStyled = styled.div`
  main {
    width: 960px;
    margin: 120px auto 0;

    .content {
      display: flex;
      gap: 18px;
    }
  }
`;
