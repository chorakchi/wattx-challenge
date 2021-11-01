import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Box } from "./Box";
// @ts-ignore
import readme from "./README.md";

export default {
  title: "Atoms/Box",
  component: Box,
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
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Box_ = Template.bind({});
Box_.args = {
  children:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  gutter: true,
};
