import { mockData as menuItemsMockData } from "../../organisms/Menu/Menu.mock";
import {
  mockData as infoBlockMockData,
  mockData2 as infoBlockMockData2,
} from "../../organisms/InfoBlock/InfoBlock.mock";
import { mockData as chartMockData } from "components/organisms/ScatterChart/ScatterChart.mock";

export const mockData = {
  menuItems: menuItemsMockData.items,
  title: "Liquidity Analysis",
  description: "Click and drag in to zoom in area",
  filterOptions: [
    { label: "10", value: 10 },
    { label: "50", value: 50 },
    { label: "all", value: 5000 },
  ],
  selectedFilter: 10,
  currentPath: "/liquidity",
  items: chartMockData.items,
  infoBlockData: [infoBlockMockData, infoBlockMockData2],
};
