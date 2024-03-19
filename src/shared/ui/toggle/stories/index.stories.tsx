import { Toggle, ToggleVariant } from "~/shared";
import { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Shared/Toggle',
  component: Toggle,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    onChange: {
      type: 'function',
      action: 'change selected item'
    }
  },
} satisfies Meta<typeof Toggle>;

export default meta

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    name: 'example',
    selected: null,
    variants: [
      {
        value: 'thin',
        label: 'Тонкое'
      },
      {
        value: 'traditional',
        label: 'Традиционное'
      }
    ]
  },
  render({ name, variants, onChange }) {
    const [selected, setSelected] = useState<ToggleVariant | null>(null)
    
    const handleChange: typeof onChange = (element) => {
      setSelected(element)
      onChange(element)
    }

    return (
      <Toggle 
        name={name}
        selected={selected} 
        variants={variants}
        onChange={handleChange}
      />
    )
  }
};