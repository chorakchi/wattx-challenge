import { HTMLAttributes } from "react";
import { menuItems } from "../Menu/Menu.interface";

export interface PageLayoutProps
  extends HTMLAttributes<HTMLElement> {
  title?: string;
  description?: any;
  menuItems?: Array<menuItems>;
  onChangeRoute?: (path: string) => void;
  currentPath?: string;
}
