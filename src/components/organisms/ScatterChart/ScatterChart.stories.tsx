import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ScatterChart } from "./ScatterChart";
import {mockData } from './ScatterChart.mock'

export default {
  title: "Organisms/ScatterChart",
  component: ScatterChart,
} as ComponentMeta<typeof ScatterChart>;

const Template: ComponentStory<typeof ScatterChart> = (args) => (
  <ScatterChart {...args} />
);

export const ScatterChart_ = Template.bind({});
ScatterChart_.args = {
  ...mockData
}