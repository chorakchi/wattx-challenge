import { HTMLAttributes } from "react";
import { IconName } from './../../atoms/SVG/IconName.type';

export type menuItems = {
  icon: IconName;
  position?: string;
  href?: string;
  uri?: string;
  label?: string
};

export interface MenuProps extends HTMLAttributes<HTMLElement> {
  items: Array<menuItems>
  onChangeRoute?: (path: string) => void;
  currentPath?: string;
}
