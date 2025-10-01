import type { Meta, StoryObj } from "@storybook/react";
import { ModeToggle } from "./index";
import { ThemeProvider } from "@/contexts/ThemeContext";

const meta: Meta<typeof ModeToggle> = {
  title: "Components/theme/ModeToggle",
  component: ModeToggle,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="flex items-center justify-center min-h-[100px]">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ModeToggle>;

export const Default: Story = {
  args: {},
};
