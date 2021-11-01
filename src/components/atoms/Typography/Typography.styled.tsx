import styled, { css } from "styled-components";
import { TypographyProps } from "./Typography.interface";

export const TypographyStyled = styled.div<TypographyProps>`
  font-weight: ${({ bold }) => (bold ? 700 : 300)};

  color: #8a8b8c;
  font-family: "Circular TT", Arial;
  ${({ variant }) => {
    switch (variant) {
      case "headline_xxl":
        return css`
          /* h1 */
          line-height: 2.25rem;
          font-weight: 700;
          font-size: 1.875rem;
        `;
      case "headline_xl":
        /* h2 */
        return css`
          line-height: 2.25rem;
          font-weight: 700;
          font-size: 1.875rem;
        `;
      case "headline_l":
        /* h3 */
        return css`
          line-height: 1.75rem;
          font-weight: 700;
          font-size: 1.5rem;
        `;
      /* h4 */
      case "headline_m":
        return css`
          line-height: 1.5rem;
          font-weight: 700;
          font-size: 1.25rem;
        `;
      case "headline_s":
        /* h5 */
        return css`
          line-height: 1.25rem;
          font-weight: 700;
          font-size: 1.25rem;
        `;
      case "headline_xs":
        /* h6 */
        return css`
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.25rem;
        `;
      case "body":
        return css`
          font-size: 1rem;
          line-height: 1.25rem;
        `;
      case "caption":
        return css`
          font-size: 0.875rem;
          line-height: 1.25rem;
        `;
      case "inherit":
        return css`
          font-size: "inherit";
        `;
      default:
        return css`
          font-size: 1rem;
          line-height: 1.25rem;
        `;
    }
  }}
`;
