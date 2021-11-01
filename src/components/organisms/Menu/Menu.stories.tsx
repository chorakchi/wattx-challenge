import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Menu } from "./Menu";
import { mockData } from "./Menu.mock";

export default {
  title: "Organisms/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Menu_ = Template.bind({});
Menu_.args = {
  onSelect: (id) => {
    alert(id);
  },
  ...mockData,
};
