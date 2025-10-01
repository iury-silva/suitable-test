import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/ui/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "outline", "ghost", "link", "destructive"],
    },
    onClick: { action: "clicked" },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    disabled: false,
  },
};

export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline",
    size: "default",
    disabled: false,
  },
};

export const Ghost: Story = {
  args: {
    children: "Button",
    variant: "ghost",
    size: "default",
    disabled: false,
  },
};

export const Link: Story = {
  args: {
    children: "Button",
    variant: "link",
    size: "default",
    disabled: false,
  },
};

export const Destructive: Story = {
  args: {
    children: "Button",
    variant: "destructive",
    size: "default",
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "sm",
    disabled: false,
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "lg",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    disabled: true,
  },
};

