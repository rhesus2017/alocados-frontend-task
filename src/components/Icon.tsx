import styled from "styled-components";
import { getImg } from "../utils/utils";

interface Props {
  width: number;
  height: number;
  img: string;
}

const Icon = (props: Props) => {
  const { width, height, img } = props;

  return (
    <IconStyled width={width} height={height}>
      <img src={getImg(img)} alt={img} />
    </IconStyled>
  );
};

export default Icon;

const IconStyled = styled.div<{ width: number; height: number }>`
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  display: flex;
  justify-content: center;
  align-items: center;
`;
