import { StyledWrapper } from "./ScatterChart.styled";
import { ScatterChartProps } from "./ScatterChart.interface";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartMore from "highcharts/highcharts-more";
import React, { useState } from "react";
import { optionsProvider } from "./ScatterChart.helper";

export const ScatterChart: React.FC<ScatterChartProps> = ({
  items,
  ...props
}: ScatterChartProps) => {
  const [highchartMoreLoaded, setHighchartMoreLoaded] = useState(false);
  setTimeout(() => {
    HighchartMore(Highcharts);
    setHighchartMoreLoaded(true);
  }, 0);

  return (
    <StyledWrapper hidden= {!items.length}>
      {highchartMoreLoaded && (
        <HighchartsReact {...props} highcharts={Highcharts} options={optionsProvider(items)} />
      )}
    </StyledWrapper>
  );
};
