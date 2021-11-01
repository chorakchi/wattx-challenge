import { BoxStyled } from "./Box.styled";
import { BoxProps } from "./Box.interface";
export const Box: React.FC<BoxProps> = ({ ...props }: BoxProps) => {
  return <BoxStyled {...props} />;
};
