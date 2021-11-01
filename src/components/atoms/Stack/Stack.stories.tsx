import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Stack } from "./Stack";
// @ts-ignore
import readme from "./README.md";

export default {
  title: "Atoms/Stack",
  component: Stack,
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
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

export const Stack_ = Template.bind({});
Stack_.args = {
  children: [
    <div className="stories-stack-block">Block 1</div>,
    <div className="stories-stack-block">Block 2</div>,
    <div className="stories-stack-block">Block 3</div>,
    <div className="stories-stack-block">Block 4</div>,
  ],
};
