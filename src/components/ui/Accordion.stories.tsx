import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/ui/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["single", "multiple"],
    },
    collapsible: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    type: "single",
    collapsible: true,
  },
  render: (args) => (
    <Accordion {...args} className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger disabled={false}>Teste 1</AccordionTrigger>
        <AccordionContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            deserunt harum pariatur hic dolores enim?
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Teste 2</AccordionTrigger>
        <AccordionContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            excepturi corporis exercitationem voluptatum reiciendis veritatis!
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  args: {
    type: "multiple",
  },
  render: (args) => (
    <Accordion {...args} className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger disabled={false}>Teste 1</AccordionTrigger>
        <AccordionContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            aliquid vel harum debitis quibusdam cumque.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Teste 2</AccordionTrigger>
        <AccordionContent>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, non
            totam. Numquam veniam ipsa ducimus.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Teste 3</AccordionTrigger>
        <AccordionContent>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            saepe labore explicabo corrupti. Assumenda, asperiores.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
