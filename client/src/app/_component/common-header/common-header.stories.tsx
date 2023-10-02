import type { Meta, StoryObj } from "@storybook/react";

import { CommonHeader } from ".";

const meta: Meta<typeof CommonHeader> = {
  title: "App/CommonHeader",
  component: CommonHeader,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ height: "150vh" }}>
        <Story />
        <div>
          <h1>Scroll Area</h1>
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CommonHeader>;

export const Default: Story = {
  args: {},
  render() {
    return <CommonHeader />;
  },
};
