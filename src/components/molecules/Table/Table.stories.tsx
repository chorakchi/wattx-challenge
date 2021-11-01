import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Table } from "./Table";
import { mockData } from "./Table.mock";
// @ts-ignore
import readme from "./README.md";

export default {
  title: "Molecules/Table",
  component: Table,
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
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Table_ = Template.bind({});
Table_.args = {
  onSelect: (id) => {
    alert(id);
  },
  ...mockData,
};
