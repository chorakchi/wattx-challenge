import { HTMLAttributes } from "react";

export interface TableProps extends HTMLAttributes<HTMLElement> {
  noResultsLabel?: string;
  items: Array<Array<string| number>>;
  tableHead: Array<string>;
}
