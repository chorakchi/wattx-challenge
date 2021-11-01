import styled, { css } from "styled-components";
import { BoxProps } from "./Box.interface";

export const BoxStyled = styled.div<BoxProps>`
  background-color: white;
  width: fit-content;
  padding: ${({gutter}) => (gutter ? "30px" : 0)};
  margin: 60px;
  border-radius: 8px;
  ${({ shadow }) => {
    switch (shadow) {
      case "01dp":
        return css`
          box-shadow: 0 0.063rem 0.188rem rgba(69, 151, 255, 0.29),
            0 0.125rem 0.125rem rgba(69, 151, 255, 0.12),
            0 0 0.125rem rgba(69, 151, 255, 0.14);
        `;
      case "02dp":
        return css`
          box-shadow: 0 0.063rem 0.313rem rgba(69, 151, 255, 0.29),
            0 0.188rem 0.25rem rgba(69, 151, 255, 0.12),
            0 0.125rem 0.25rem rgba(69, 151, 255, 0.14);
        `;
      case "03dp":
        return css`
          box-shadow: 0 0.063rem 0.5rem rgba(69, 151, 255, 0.29),
            0 0.188rem 0.25rem rgba(69, 151, 255, 0.12),
            0 0.188rem 0.188rem rgba(69, 151, 255, 0.14);
        `;
      case "04dp":
        return css`
          box-shadow: 0 0.063rem 0.625rem rgba(69, 151, 255, 0.29),
            0 0.25rem 0.313rem rgba(69, 151, 255, 0.12),
            0 0.125rem 0.25rem rgba(69, 151, 255, 0.14);
        `;
      case "06dp":
        return css`
          box-shadow: 0 0.188rem 0.313rem rgba(69, 151, 255, 0.29),
            0 0.063rem 1.125rem rgba(69, 151, 255, 0.12),
            0 0.375rem 0.625rem rgba(69, 151, 255, 0.14);
        `;
      case "08dp":
        return css`
          box-shadow: 0 0.25rem 0.313rem rgba(69, 151, 255, 0.29),
            0 0.188rem 0.875rem 0.188rem rgba(69, 151, 255, 0.12),
            0 0.5rem 0.625rem 0.063rem rgba(69, 151, 255, 0.14);
        `;
      case "09dp":
        return css`
          box-shadow: 0 0.313rem 0.375rem rgba(69, 151, 255, 0.29),
            0 0.188rem 1rem 0.125rem rgba(69, 151, 255, 0.12),
            0 0.563rem 0.75rem 0.063rem rgba(69, 151, 255, 0.14);
        `;
      case "12dp":
        return css`
          box-shadow: 0 0.438rem 0.5rem rgba(69, 151, 255, 0.29),
            0 0.313rem 1.375rem 0.25rem rgba(69, 151, 255, 0.12),
            0 0.75rem 1.063rem 0.125rem rgba(69, 151, 255, 0.14);
        `;
      case "16dp":
        return css`
          box-shadow: 0 0.5rem 0.625rem rgba(69, 151, 255, 0.29),
            0 0.375rem 1.875rem 0.313rem rgba(69, 151, 255, 0.12),
            0 1rem 1.5rem 0.125rem rgba(69, 151, 255, 0.14);
        `;
      case "24dp":
        return css`
          box-shadow: 0 0.688rem 0.938rem rgba(69, 151, 255, 0.29),
            0 0.563rem 2.875rem 0.5rem rgba(69, 151, 255, 0.12),
            0 1.5rem 2.375rem 0.188rem rgba(69, 151, 255, 0.14);
        `;
      default:
        return css`
          filter: drop-shadow(0px 4px 117px rgba(69, 151, 255, 0.29));
        `;
    }
  }}
`;
