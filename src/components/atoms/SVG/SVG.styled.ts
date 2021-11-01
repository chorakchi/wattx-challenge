import styled, { css } from "styled-components";
import { ReactSVG } from "react-svg";

export const SVGStyled = styled(ReactSVG)`
  display: inline-flex;
  vertical-align: middle;
  color: ${({ color }) => color || "back"};
  svg,
  span {
    display: flex;
    fill: currentColor;
    ${({ size }) => {
      switch (size) {
        case "small":
          return css`
            width: 18px;
            height: 18px;
          `;
        case "medium":
          return css`
            width: 28px;
            height: 28px;
          `;
        case "large":
          return css`
            width: 42px;
            height: 42px;
          `;
        case "xLarge":
          return css`
            width: 82px;
            height: 82px;
          `;
        default:
          return css`
            width: 100%;
            height: 100%;
          `;
      }
    }}
  }

  path {
    fill: currentColor;
  }
`;
