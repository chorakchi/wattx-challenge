import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PageLayout } from "./PageLayout";
import {mockData } from './PageLayout.mock'

export default {
  title: "Organisms/PageLayout",
  component: PageLayout,
} as ComponentMeta<typeof PageLayout>;

const Template: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args} />
);

export const PageLayout_ = Template.bind({});
PageLayout_.args = {
  onSelect:(id)=>{alert(id)},
  ...mockData
}