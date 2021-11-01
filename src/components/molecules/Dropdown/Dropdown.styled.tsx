import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  background-color: white;

  border-radius: 8px;
  margin: 16px 0;
  position: relative;
  width: 208px;
  height: 40px;

  .icon {
    position: absolute;
    right: 14px;
    top: 7px;
    pointer-events: none;
  }
`;

export const StyledDropdown = styled.select`
  background-color: white;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  padding-left: 16px;
  border-radius: 8px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #0071ff;

  :focus {
    border-color: gray;
    box-shadow: none;
    outline: none;
  }
`;

export const StyledOption = styled.option``;
