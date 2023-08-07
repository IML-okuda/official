import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/ui";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "primary",
  },
  render(args) {
    return (
      <div>
        <Button {...args}>Button</Button>
      </div>
    );
  },
};

export const Catalog: Story = {
  args: {},
  render(args) {
    return (
      <div
        style={{
          display: "inline-flex",
          gap: "1rem",
        }}
      >
        <Button {...args} variant="primary">
          Primary
        </Button>
        <Button {...args} variant="secondary">
          Secondary
        </Button>
      </div>
    );
  },
};
