import styled from "styled-components";
import { Box } from "components";

export const StyledWrapper = styled(Box)`
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
  gap: 18px;
  @media screen and (max-width: 1280px) {
    gap: 0;
    padding: 2px;
    margin: 0;
  }
  display: ${({ hidden }) => (hidden ? "hidden" : "unset")};

  .highcharts-credits {
    display: none;
  }

  h3 {
    font-size: 28px;
    padding: 4px 0;
  }

  th {
    font-weight: bold;
    padding-right: 8px;
    color: gray;
  }
`;
