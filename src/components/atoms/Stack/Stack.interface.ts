import { HTMLAttributes } from "react";

export interface StackProps extends HTMLAttributes<HTMLElement> {
  direction?: "column" | "column-reverse" | "row" | "row-reverse";
  spacing?: number;
}
