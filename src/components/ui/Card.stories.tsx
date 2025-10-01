import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardAction,
  CardTitle,
} from "./card";
import { Button } from "./button";

const meta: Meta<typeof Card> = {
  title: "Components/ui/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-[350px]">
      <CardHeader>
        <CardTitle>Lorem.</CardTitle>
        <CardDescription>Lorem ipsum dolor sit amet.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </CardContent>
      <CardFooter>
        <CardAction className="flex gap-2 justify-end w-full">
          <Button variant="outline">Cancel</Button>
          <Button>Button</Button>
        </CardAction>
      </CardFooter>
    </Card>
  ),
};
