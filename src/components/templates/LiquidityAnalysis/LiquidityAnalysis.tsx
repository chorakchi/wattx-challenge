import { StyledInfoBlock } from "./LiquidityAnalysis.styled";
import { MarketOverviewProps } from "./LiquidityAnalysis.interface";
import { Dropdown, PageLayout, Stack, ScatterChart } from "components";

export const LiquidityAnalysis: React.FC<MarketOverviewProps> = ({
  items = [],
  selectedFilter,
  onChangeFilter,
  filterOptions,
  infoBlockData,
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
          key="1"
            options={filterOptions}
            value={selectedFilter}
            onChange={(e) => {
              onChangeFilter(e.target["value"]);
            }}
          />
        </>
      }
    >
      <ScatterChart items={items} />
      <Stack direction="column">
        {infoBlockData.map((item) => (
          <StyledInfoBlock {...item} />
        ))}
      </Stack>
    </PageLayout>
  );
};
