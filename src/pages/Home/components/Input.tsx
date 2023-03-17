import styled, { css } from "styled-components";

interface Props {
  value: string;
  readOnly: boolean;
  error: boolean;
  onChange: (value: string) => void;
}

const Input = (props: Props) => {
  const { value, error, readOnly, onChange } = props;

  return (
    <InputStyled readOnly={readOnly} error={error}>
      {!readOnly && <p className="label">전환 수량</p>}
      <input
        type="text"
        value={value}
        readOnly={readOnly}
        placeholder="전환 수량을 입력해주세요."
        onChange={(event) => onChange(event.target.value)}
      />
    </InputStyled>
  );
};

export default Input;

const InputStyled = styled.div<{ readOnly: boolean; error: boolean }>`
  flex-grow: 1;
  height: 100%;
  border-radius: 12px;

  .label {
    font-family: "Pretendard";
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    color: #546182;
  }

  input {
    background: transparent;
    width: 100%;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 18px;
    color: #404e71;

    &::placeholder {
      color: #ddd;
    }
  }

  ${(props) =>
    !props.readOnly
      ? css`
          padding: 10px 14px;
          background: #fafbfc;
          border: 1px solid #fafbfc;

          ${props.error &&
          css`
            border: 1px solid #f7254b;
          `}

          input {
            height: 24px;
          }
        `
      : css`
          padding: 12px 14px;

          input {
            height: 100%;
          }
        `}
`;
