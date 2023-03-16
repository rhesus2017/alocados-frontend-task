import styled from "styled-components";
import Icon from "../../../components/Icon";

interface Props {
  text: string;
  img: string;
  onClick: (key: string) => void;
}

const Option = (props: Props) => {
  const { text, img, onClick } = props;

  return (
    <OptionStyled className="option" onClick={() => onClick(img)}>
      <Icon width={24} height={24} iconKey={img} />
      <span className="text">{text}</span>
    </OptionStyled>
  );
};

export default Option;

const OptionStyled = styled.div`
  width: 100%;
  height: 56px;
  padding: 0 13px;
  display: flex;
  align-items: center;
  border-top: 1px solid #efefef;

  &:hover {
    transition: 0.05s;
    background: #ccc;
  }

  .text {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 14px;
    line-height: 178%;
    margin-left: 3px;
  }
`;
