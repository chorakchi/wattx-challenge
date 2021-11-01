import { StyledWrapper } from "./PageLayout.styled";
import { PageLayoutProps } from "./PageLayout.interface";
import { Stack, Typography, Menu } from "components";
export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  description,
  menuItems,
  onChangeRoute,
  currentPath,
  ...props
}: PageLayoutProps) => {
  return (
    <StyledWrapper {...props}>
      <Menu items={menuItems} onChangeRoute={onChangeRoute} currentPath={currentPath} />
      <Stack direction="column" className="mainBlock">
        <Typography variant="headline_xl">{title}</Typography>
        <Typography>{description}</Typography>
        <Stack direction="row" className="mainBlock">
          {children}
        </Stack>
      </Stack>
    </StyledWrapper>
  );
};
