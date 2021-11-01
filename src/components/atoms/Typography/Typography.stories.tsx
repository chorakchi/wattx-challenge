import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Typography } from "./Typography";

export default {
  title: "Atoms/Typography",
  component: Typography,
  parameters: {
    docs: {
      description: {
        component:
          `Use typography to present your design and content as clearly and efficiently as possible.<br/>
          The Typography component makes it easy to apply a default set of font weights and sizes in your application.
                <br/>` +
          `<br/> <br/> <h5> Changing the semantic element</h5>` +
          " The Typography component uses the variantMapping prop to associate a UI variant with a semantic element. It's important to realize that the style of a typography component is independent from the semantic underlying element. <br/> You can change the underlying element for a one-off situation with the ```component``` prop <br/> <br/>",
      },
    },
    backgrounds: {
      default: "light",
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Typography_ = Template.bind({});
Typography_.args = {
  children: "Lorem Ipsum is simply dummy text of the printing",
  bold: true,
  variant: "body",
};
