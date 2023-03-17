import styled from "styled-components";
import { HistoryType } from "../type/atom";
import { numberFormat } from "../utils/utils";
import Icon from "./Icon";

interface Props {
  item: HistoryType;
}

const HistoryCard = (props: Props) => {
  const { item } = props;

  return (
    <HistoryCardStyled>
      <span className="date">{item.date}</span>
      <div className="swap">
        <div className="coin">
          <Icon width={24} height={24} iconKey={item.from.key} />
          <span className="input">
            {numberFormat(item.from.input)} {item.from.code}
          </span>
        </div>
        <Icon width={16} height={16} iconKey="toArrow" />
        <div className="coin">
          <Icon width={24} height={24} iconKey={item.to.key} />
          <span className="input">
            {numberFormat(item.to.input)} {item.to.code}
          </span>
        </div>
      </div>
    </HistoryCardStyled>
  );
};

export default HistoryCard;

const HistoryCardStyled = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 8px;
  background: #f4f5f8;
  border-radius: 12px;

  &:last-of-type {
    margin-bottom: 0;
  }

  .date {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 14px;
    color: #2a3249;
  }

  .swap {
    display: flex;
    align-items: center;
    gap: 32px;

    .coin {
      display: flex;
      align-items: center;

      .input {
        font-family: "Poppins";
        font-weight: 600;
        font-size: 18px;
        margin-left: 8px;
        color: #404e71;
      }
    }
  }
`;
