import styled from "styled-components";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Wallet from "./components/Wallet";
import Swap from "./components/Swap";

const Home = () => {
  return (
    <HomeStyled>
      <Header />
      <main>
        <Title title="환전하기" />
        <div className="content">
          <Wallet />
          <Swap />
        </div>
      </main>
    </HomeStyled>
  );
};

export default Home;

const HomeStyled = styled.div`
  main {
    width: 960px;
    margin: 120px auto 0;

    .content {
      display: flex;
      gap: 18px;
    }
  }
`;
