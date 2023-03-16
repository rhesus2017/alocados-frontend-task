import styled, { css } from "styled-components";
import { useState } from "react";
import Icon from "../../../components/Icon";
import { CoinWalletsType } from "../../../type/atom";

interface Props {
  name: string;
  iconKey: string;
  options: CoinWalletsType;
  onSelect: (key: string) => void;
}

const Select = (props: Props) => {
  const { name, iconKey, options, onSelect } = props;
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleSelectedClick = () => {
    setIsSelectOpen((state) => !state);
  };

  const handleOptionClick = (key: string) => {
    onSelect(key);
    setIsSelectOpen(false);
  };

  return (
    <SelectStyled isSelectOpen={isSelectOpen}>
      <div className="selected" onClick={handleSelectedClick}>
        <Icon width={24} height={24} iconKey={iconKey} />
        <span className="name">{name}</span>
        <Icon width={24} height={24} iconKey="selectArrow" />
      </div>
      <div className="options">
        {Object.keys(options).map((key) => (
          <div
            className="option"
            onClick={() => handleOptionClick(options[key].key)}
          >
            <Icon width={24} height={24} iconKey={options[key].key} />
            <span className="name">{options[key].name}</span>
          </div>
        ))}
      </div>
    </SelectStyled>
  );
};

export default Select;

const SelectStyled = styled.div<{ isSelectOpen: boolean }>`
  width: 147px;
  height: 100%;
  background: #fafbfc;
  border-radius: 12px;
  cursor: pointer;
  position: relative;

  .selected {
    width: 100%;
    height: 100%;
    padding: 0 13px;
    display: flex;
    align-items: center;

    .name {
      font-family: "Poppins";
      font-weight: 400;
      font-size: 14px;
      line-height: 178%;
      margin-left: 3px;
      flex-grow: 1;
    }
  }

  .options {
    width: 147px;
    padding-top: 12px;
    background: #fafbfc;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    position: absolute;
    top: 44px;
    left: 0;
    z-index: 1;
    overflow: hidden;

    .option {
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

      .name {
        font-family: "Poppins";
        font-weight: 400;
        font-size: 14px;
        line-height: 178%;
        margin-left: 3px;
      }
    }

    ${(props) =>
      !props.isSelectOpen &&
      css`
        display: none;
      `}
  }
`;
