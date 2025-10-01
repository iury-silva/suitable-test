import type { Meta, StoryObj } from "@storybook/react";
import { Products } from "./index";
import { sampleProducts } from "./sampleProducts";

const meta: Meta<typeof Products> = {
  title: "Components/products/Products",
  component: Products,
  tags: ["autodocs"],
  argTypes: {
    products: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof Products>;

export const Default: Story = {
  args: {
    products: sampleProducts,
  },
};