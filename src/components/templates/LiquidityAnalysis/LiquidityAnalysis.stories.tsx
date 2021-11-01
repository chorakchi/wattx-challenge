import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockData } from "./LiquidityAnalysis.mock";
import { LiquidityAnalysis } from "./LiquidityAnalysis";
// @ts-ignore
import readme from "./README.md";

export default {
  title: "templates/LiquidityAnalysis",
  component: LiquidityAnalysis,
  parameters: {
    backgrounds: {
      default: "light",
    },
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as ComponentMeta<typeof LiquidityAnalysis>;

const Template: ComponentStory<typeof LiquidityAnalysis> = (args) => (
  <LiquidityAnalysis {...args} />
);

export const LiquidityAnalysis_ = Template.bind({});
LiquidityAnalysis_.args = mockData;
