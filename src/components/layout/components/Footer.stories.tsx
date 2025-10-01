import type { Meta, StoryObj } from "@storybook/react";
import { QueryClient } from "@tanstack/react-query";
import { Footer } from "./Footer";
import { QueryClientProvider } from "@tanstack/react-query";
import { useCartStore } from "@/stores/cart";
import { useEffect } from "react";

const queryClient = new QueryClient();

const FooterWithMockData = () => {
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

    addToCart({
      id: 2,
      name: "Batata Frita",
      price: 12.5,
      quantity: 1,
    });
  }, []);

  return <Footer />;
};

const meta: Meta<typeof Footer> = {
  title: "Components/Layout/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <div className="w-full max-w-md mx-auto flex flex-col md:max-w-x">
          <Story />
        </div>
      </QueryClientProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const WithItems: Story = {
  render: () => <FooterWithMockData />,
};
