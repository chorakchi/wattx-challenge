import { SVGProps } from "./SVG.type";
import { SVGStyled } from "./SVG.styled";

export const SVG: React.FC<SVGProps> = ({
  name,
  src,
  iconsFolder = "/assets/icons/",
  ...props
}) => {
  const sourcePath = src ? src : `${iconsFolder}${name}.svg`;

  return <SVGStyled {...props} src={sourcePath} wrapper="span" />;
};
