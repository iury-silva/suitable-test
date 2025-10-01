import type { Meta, StoryObj } from "@storybook/react";
import { CompanyInfo } from "./index";
import { mockCompanyData } from "@/mocks/handlers";
import { useState } from "react";
import { Button } from "../ui/button";

const meta: Meta<typeof CompanyInfo> = {
  title: "components/company/CompanyInfo",
  component: CompanyInfo,
  tags: ["autodocs"],
  argTypes: {
    isOpen: { control: "boolean" },
    setIsOpen: { action: "setIsOpen" },
    company: { control: "object" },
  },
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="max-w-md w-full h-8 ">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CompanyInfo>;

const CompanyTrigger = ({ ...args }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={() => setIsOpen(true)}>Open CompanyInfo</Button>
      <CompanyInfo
        {...args}
        company={{
          data: mockCompanyData.data,
        }}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export const Default: Story = {
  args: {
    company: {
      data: mockCompanyData.data,
    },
    isOpen: true,
    setIsOpen: () => {},
  },
  render: (args) => {
    return <CompanyTrigger {...args} />;
  },
};
