import styled from "styled-components";
import { StackProps } from "./Stack.interface";

export const StackStyled = styled.div<StackProps>`
  flex-direction: ${({ direction }) => direction || "row"};
  display: flex;
  gap: ${({ spacing }) => spacing + "px" || 0};
`;
