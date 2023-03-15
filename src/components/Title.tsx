import styled from "styled-components";

interface Props {
  title: string;
}

const Title = (props: Props) => {
  const { title } = props;

  return <TitleStyle>{title}</TitleStyle>;
};

export default Title;

const TitleStyle = styled.div`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 22px;
  color: rgba(42, 50, 73, 1);
  margin-bottom: 24px;
`;
