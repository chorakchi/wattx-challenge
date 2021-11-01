import { HTMLAttributes } from "react";

type option = {
  label: string;
  value: number;
};

export interface DropdownProps extends HTMLAttributes<HTMLElement> {
  options: Array<option>;
  value: number;
}
