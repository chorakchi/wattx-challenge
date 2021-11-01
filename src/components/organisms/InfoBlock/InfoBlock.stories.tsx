import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InfoBlock } from "./InfoBlock";
import {mockData, mockData2 } from './InfoBlock.mock'

export default {
  title: "Organisms/InfoBlock",
  component: InfoBlock,
} as ComponentMeta<typeof InfoBlock>;

const Template: ComponentStory<typeof InfoBlock> = (args) => (
  <InfoBlock {...args} />
);

export const InfoBlock_ = Template.bind({});
InfoBlock_.args = {
  onSelect:(id)=>{alert(id)},
  ...mockData
}

export const InfoBlock2_ = Template.bind({});
InfoBlock2_.args = {
  onSelect:(id)=>{alert(id)},
  ...mockData2
}