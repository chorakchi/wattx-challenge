import { MarketOverviewProps } from "./MarketOverview.interface";
import { mapper } from "./MarketOverview.helper";
import { Dropdown, PageLayout, Table } from "components";

export const MarketOverview: React.FC<MarketOverviewProps> = ({
  items = [],
  selectedFilter,
  onChangeFilter,
  filterOptions,
  description,
  ...props
}) => {
  return (
    <PageLayout
      {...props}
      description={
        <>
          {description}
          <Dropdown
          key="2"
            options={filterOptions}
            value={selectedFilter}
            onChange={(e) => {
              onChangeFilter(e.target["value"]);
            }}
          />
        </>
      }
    >
      <Table
        tableHead={[
          "",
          "Name",
          "Rank",
          "Price",
          "Market Cap",
          "Price Change (24h)",
          "Volume (24h)",
        ]}
        items={mapper(items)}
      />
    </PageLayout>
  );
};
