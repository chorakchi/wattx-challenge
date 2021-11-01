import { StackStyled } from "./Stack.styled";
import { StackProps } from "./Stack.interface";
export const Stack: React.FC<StackProps> = ({ ...props }: StackProps) => {
  return <StackStyled {...props} />;
};
