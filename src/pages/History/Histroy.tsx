import { useRecoilState, useRecoilValue } from "recoil";
import styled, { css } from "styled-components";
import Header from "../../components/Header";
import HistoryCard from "../../components/HistoryCard";
import Icon from "../../components/Icon";
import Title from "../../components/Title";
import { isDescendState, swapHistoryState } from "../../recoil/atoms";

const Histroy = () => {
  const swapHistory = useRecoilValue(swapHistoryState);
  const [isDescend, setIsDescend] = useRecoilState(isDescendState);

  return (
    <HistoryStyled isDescend={isDescend}>
      <Header />
      <main>
        <Title title="환전 내역" />
        <div className="head">
          <div className="sort" onClick={() => setIsDescend((state) => !state)}>
            <span>환전 시간</span>
            <div className="iconWrap">
              <Icon width={16} height={16} iconKey="downArrow" />
            </div>
          </div>
          <span>환전금액</span>
        </div>
        <div className="cardWrap">
          {swapHistory
            .map((item, index) => <HistoryCard key={index} item={item} />)
            .sort(() => (isDescend ? -1 : 1))}
        </div>
      </main>
    </HistoryStyled>
  );
};

export default Histroy;

const HistoryStyled = styled.div<{ isDescend: boolean }>`
  main {
    width: 634px;
    margin: 120px auto 0;
    padding-bottom: 80px;

    .head {
      width: 100%;
      height: 41px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #f4f5f8;
      border-radius: 12px;
      padding: 0 16px;
      margin-bottom: 8px;

      .sort {
        display: flex;
        cursor: pointer;

        > .iconWrap {
          ${(props) =>
            !props.isDescend &&
            css`
              transform: rotate(180deg);
            `}
        }

        span {
          font-family: "Poppins";
          font-weight: 700;
          font-size: 14px;
          color: #2a3249;
        }
      }

      > span {
        font-family: "Poppins";
        font-weight: 400;
        font-size: 14px;
        color: #2a3249;
      }
    }

    .cardWrap {
      overflow: auto;
      height: 40vh;
      min-height: 470px;

      &::-webkit-scrollbar {
        display: none;
      }

      & {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    }
  }
`;
