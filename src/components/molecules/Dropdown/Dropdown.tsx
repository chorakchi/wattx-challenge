import { StyledDropdown, StyledWrapper, StyledOption } from "./Dropdown.styled";
import { DropdownProps } from "./Dropdown.interface";
import { SVG } from "components";

export const Dropdown: React.FC<DropdownProps> = ({
  options = [],
  ...props
}: DropdownProps) => {
  return (
    <StyledWrapper>
      <StyledDropdown {...props}>
        {options.map((item) => (
          <StyledOption value={item.value}>{item.label}</StyledOption>
        ))}
      </StyledDropdown>
      <SVG name="arrowDown" color="#0071FF" className="icon"></SVG>
    </StyledWrapper>
  );
};
