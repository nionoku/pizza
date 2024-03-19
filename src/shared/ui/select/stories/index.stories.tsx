import { Select, ToggleVariant } from "~/shared";
import { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Shared/Select',
  component: Select,
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
} satisfies Meta<typeof Select>;

export default meta

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    selected: null,
    variants: [
      {
        label: 'Борт с моцареллой',
        value: '1'
      },
      {
        label: 'Борт с филадельфией',
        value: '2'
      },
      {
        label: 'Колбасный борт',
        value: '3'
      },
      {
        label: 'Колбасный борт с горчицей',
        value: '4'
      },
    ],
    placeholder: '-- Выберите борт --',
  },
  render({
    variants,
    placeholder,

    onChange
  }) {
    const [selected, setSelected] = useState<ToggleVariant | null>(null)
    
    const handleChange: typeof onChange = (element) => {
      setSelected(element)
      onChange(element)
    }
    
    return (
      <Select
        selected={selected}

        variants={variants}
        placeholder={placeholder}

        onChange={handleChange}

        style={{
          'width': '200px'
        }}
      />
    )
  }
};