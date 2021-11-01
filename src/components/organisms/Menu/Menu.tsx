import { StyledWrapper, StyledItem, StyledGap } from "./Menu.styled";
import { MenuProps } from "./Menu.interface";
import { SVG } from "components";

export const Menu: React.FC<MenuProps> = ({
  items,
  onChangeRoute,
  currentPath,
  ...props
}: MenuProps) => {
  const menuItem = items.filter((item) => item.position != "end");
  const menuItemSecondPart = items.filter((item) => item.position === "end");
  return (
    <StyledWrapper {...props}>
      {menuItem.map((item) => (
        <StyledItem
          onClick={() => item.uri && onChangeRoute(item.uri)}
          selected={currentPath ? currentPath == item.uri : "/" == item.uri}
        >
          <SVG size="medium" name={item.icon} />
        </StyledItem>
      ))}
      <StyledGap />
      {menuItemSecondPart.map((item) => (
        <StyledItem
          href={item.href}
          onClick={() => item.uri && onChangeRoute(item.uri)}
          selected={item.uri && currentPath == item.uri}
        >
          <SVG size="medium" name={item.icon} />
        </StyledItem>
      ))}
    </StyledWrapper>
  );
};
