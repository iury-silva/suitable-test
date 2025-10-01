import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "./badge"

const meta: Meta<typeof Badge> = {
  title: "Components/ui/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
      ],
    },
    className: { control: "text" },
    children: { control: "text" },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    variant: "default",
    className: "",
    children: "Badge",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    className: "",
    children: "Badge",
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    className: "",
    children: "Badge",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    className: "",
    children: "Badge",
  },
}