import { HTMLAttributes } from 'react';

export type shadow =
  | "01dp"
  | "02dp"
  | "03dp"
  | "04dp"
  | "06dp"
  | "08dp"
  | "09dp"
  | "12dp"
  | "16dp"
  | "24dp"

export interface BoxProps extends HTMLAttributes<HTMLElement> {

  shadow?: shadow;
  /**
   * If true, the text will have a bottom margin.
   */
  gutter?: boolean;
}