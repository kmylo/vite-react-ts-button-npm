import type { Meta, StoryObj } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "in2/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: "centered",
    // layout: "fullscreen",
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      // defaultViewport: "iphone6",
    },
  },
  // argTypes: {

  //   }
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    children: "Button Primary",
    // fullWidth: true,
  },
};

export const Secondary: Story = {
  args: {
    children: "Button Secondary",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Button large",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Button Small",
  },
};

export const MyStory: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iphonex",
    },
  },
};
