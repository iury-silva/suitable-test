import type { Meta, StoryObj } from "@storybook/react";
import { Cart } from "./index";
import { useEffect } from "react";
import { useCartStore } from "@/stores/cart";

const MockCart = (args) => {
  useEffect(() => {
    const addToCart = useCartStore.getState().addToCart;

    // Limpa o carrinho primeiro
    useCartStore.getState().clearCart?.();

    // Adiciona alguns itens para mostrar o footer
    addToCart({
      id: 1,
      name: "Hambúrguer Clássico",
      price: 25.9,
      quantity: 2,
    });
  }, []);

  return <Cart {...args} />;
};

const meta: Meta<typeof Cart> = {
  title: "Components/cart/Cart",
  component: Cart,
  tags: ["autodocs"],
  argTypes: {
    isOpen: { control: "boolean" },
    setIsOpen: { action: "open state changed" },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Cart>;

export const Default: Story = {
  args: {
    isOpen: false,
    setIsOpen: () => {},
  },
  render: (args) => {
    return <MockCart {...args} />;
  },
};
