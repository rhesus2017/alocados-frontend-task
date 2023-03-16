import styled from "styled-components";
import CoinSet from "./CoinSet";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";

const Swap = () => {
  const handleSwapClick = () => {
    alert("환전!");
  };

  return (
    <SwapStyled>
      <CoinSet type="from" />
      <div className="iconWrap">
        <Icon width={40} height={40} iconKey="swap" />
      </div>
      <CoinSet type="to" />
      <div className="buttonWrap">
        <Button type="primary" label="환전" onClick={handleSwapClick} />
      </div>
    </SwapStyled>
  );
};

export default Swap;

const SwapStyled = styled.div`
  flex-grow: 1;

  .buttonWrap {
    margin-top: 47px;
  }

  > .iconWrap {
    margin: 24px auto;
    display: flex;
    justify-content: center;
  }
`;
