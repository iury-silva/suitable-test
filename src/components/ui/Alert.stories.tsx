import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { TriangleAlertIcon } from "lucide-react";

const meta: Meta<typeof Alert> = {
  title: "Components/ui/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "destructive"],
    },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    variant: "default",
    className: "",
  },
  render: (args) => (
    <Alert {...args}>
      <TriangleAlertIcon />
      <AlertTitle>Titulo do Alerta</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla tempore
        eaque tenetur architecto ipsam earum totam veniam atque culpa commodi,
        quasi sint repudiandae molestiae modi!
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    className: "",
  },
  render: (args) => (
    <Alert {...args}>
      <TriangleAlertIcon />
      <AlertTitle>Este é o título do alerta</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fuga eaque
        ipsa sint temporibus quas vero, numquam quidem officia animi eius, nemo
        vitae necessitatibus tempora.
      </AlertDescription>
    </Alert>
  ),
};
