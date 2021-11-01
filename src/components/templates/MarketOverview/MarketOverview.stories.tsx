import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockData } from "./MarketOverview.mock";
import { MarketOverview } from "./MarketOverview";
// @ts-ignore
import readme from "./README.md";

export default {
  title: "templates/MarketOverview",
  component: MarketOverview,
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
} as ComponentMeta<typeof MarketOverview>;

const Template: ComponentStory<typeof MarketOverview> = (args) => <MarketOverview {...args} />;

export const MarketOverview_ = Template.bind({});
MarketOverview_.args = mockData;
