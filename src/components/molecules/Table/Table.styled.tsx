import styled from "styled-components";
import { Box, Typography } from "components";

export const StyledTable = styled.table`
  border-spacing: 0px;
  width: min-content;
  min-width: 100%;
  tr:nth-child(even) {
    background: #0071ff0d;
  }
  tr:nth-child(odd) {
    background: #fff;
  }
`;
export const StyledWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  overflow: auto;
  margin: 0;
  height: 60vh;
  .icon {
    width: 52px;
    height: 52px;
  }
`;

export const TextStyled = styled(Typography)`
  border: none;
  text-align: ${(props) => (props.number ? "right" : "left")};
  color: ${({ negative }) => (negative ? "red" : "unset")};
  line-height: 22px;
  padding-right: 8px;
  white-space: nowrap;
  vertical-align: bottom;
`;

export const StyledHeading = styled(TextStyled)`
  padding: 24px 0;
  font-weight: bold;
  white-space: normal;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 1;
  white-space: normal;
  vertical-align: top;
`;
