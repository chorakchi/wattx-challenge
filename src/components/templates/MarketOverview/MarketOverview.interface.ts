import { HTMLAttributes } from "react";

export interface MarketOverviewProps extends HTMLAttributes<HTMLElement> {
  items: any;
  menuItems: any;
  selectedFilter: number;
  onChangeFilter: (value: number) => void;
  filterOptions: any;
  title: string;
  description: string;
  infoBlockData?: any;
}
