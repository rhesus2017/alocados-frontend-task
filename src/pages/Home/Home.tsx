import styled from "styled-components";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Wallet from "./components/Wallet";
import Swap from "./components/Swap";
import Icon from "../../components/Icon";
import { useRecoilState } from "recoil";
import { isMessageState } from "../../recoil/atoms";

const Home = () => {
  const [isMessage, setIsMessage] = useRecoilState(isMessageState);

  return (
    <HomeStyled>
      <Header />
      <main>
        <Title title="환전하기" />
        {isMessage && (
          <div className="message">
            <Icon width={20} height={20} iconKey="info" />
            <span>최근 거래 후 갱신되었습니다.</span>
            <button type="button" onClick={() => setIsMessage(false)}>
              <Icon width={24} height={24} iconKey="close" />
            </button>
          </div>
        )}

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

    .message {
      width: 100%;
      height: 56px;
      font-family: "Pretendard";
      font-weight: 400;
      font-size: 15px;
      background: rgba(55, 86, 228, 0.12);
      color: rgba(55, 86, 228, 1);
      margin-bottom: 14px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      padding: 0 16px;

      span {
        margin-left: 8px;
      }

      button {
        margin-left: auto;
        background: none;
        cursor: pointer;
      }
    }

    .content {
      display: flex;
      gap: 18px;
    }
  }
`;
