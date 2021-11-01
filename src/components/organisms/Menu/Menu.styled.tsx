import styled, { css } from "styled-components";
import { Box } from "../../atoms";

export const StyledWrapper = styled(Box)`
  min-height: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  padding: 23px 0;

  @media screen and (max-width: 1280px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    flex-direction: row;
    height: 72px;
    z-index: 2;
    width: 100%;
    min-height: 72px;
    padding: 0;
  }
`;

export const StyledItem = styled.div`
  width: 72px;
  padding: 23px 0;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background: #0071ff38;
    color: #0071ff;
    box-shadow: 0px 5px 21px 2px rgba(28, 168, 255, 0.1);
  }
  ${({ selected }) =>
    selected
      ? css`
          cursor: default;
          background: #0071ff;
          color: white;
          :hover {
            background: #0071ff;
            color: white;
          }
        `
      : css`
          background: unset;
          color: #0071ff;
        `};
  transition: all 100ms ease-in-out;
`;

export const StyledGap = styled.div`
  flex: 1;
`;
