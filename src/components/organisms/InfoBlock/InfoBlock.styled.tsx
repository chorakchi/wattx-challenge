import styled, { css } from "styled-components";
import { Box, Typography } from "../../atoms";

export const StyledWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 0 5%;
  padding-bottom: 8px;
  margin-bottom: 32px;
  overflow: hidden;
  height: fit-content;
  max-width: 450px;

  .pro {
    padding: 0 16px;
    margin-top: -14px;
  }
  .check {
    margin-left: 4px;
    margin-top: -8px;
  }
`;

export const StyledText = styled(Typography)`
  padding: 6px 16px;
`;
