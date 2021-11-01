import { TypographyStyled } from "./Typography.styled";
import { TypographyProps } from "./Typography.interface";
export const Typography: React.FC<TypographyProps> = ({
  variant = "body",
  ...props
}: TypographyProps) => {
  return <TypographyStyled {...props} variant={variant} />;
};
