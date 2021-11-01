import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Dropdown } from "./Dropdown";
import { mockData } from "./Dropdown.mock";
// @ts-ignore
import readme from "./README.md";

export default {
  title: "Molecules/Dropdown",
  component: Dropdown,
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
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Dropdown_ = Template.bind({});
Dropdown_.args = {
  onSelect: (id) => {
    alert(id);
  },
  ...mockData,
};
