import { Button } from "~/shared";
import { Meta, StoryObj } from "@storybook/react";
import { MouseEvent, useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Shared/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    onClick: {
      type: 'function',
      action: 'click by button'
    }
  },
} satisfies Meta<typeof Button>;

export default meta

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
  },
  render({
    onClick
  }) {
    return (
      <Button
        onClick={onClick}
      >
        Добавить
      </Button>
    )
  }
};

export const Disabled: Story = {
  args: {
  },
  render({
    onClick
  }) {
    return (
      <Button
        disabled

        beforeLabel={(
          <span className="material-symbols-outlined">
            Add
          </span>
        )}
        onClick={onClick}
      >
        Добавить
      </Button>
    )
  }
};

export const Icon: Story = {
  args: {
  },
  render({
    onClick
  }) {
    return (
      <Button
        beforeLabel={(
          <span className="material-symbols-outlined">
            Add
          </span>
        )}
        onClick={onClick}
      >
        Добавить
      </Button>
    )
  }
};

export const Counter: Story = {
  args: {
  },
  render({
    onClick
  }) {
    const [counter, setCounter] = useState(0)

    const handleClickAdd = (event: MouseEvent<HTMLButtonElement>) => {
      setCounter(counter + 1)

      onClick?.(event)
    }

    const handleClickSub = () => {
      if (counter === 0) {
        return
      }

      setCounter(counter - 1)
    }

    return (
      <div style={{
        'display': 'flex',
        'flexDirection': 'row-reverse',
        'columnGap': '16px'
      }}>
        <Button
          beforeLabel={(
            <span className="material-symbols-outlined">
              add
            </span>
          )}

          // @ts-expect-error corrected
          afterLabel={counter > 0 && (
            <span
              style={{
                'width': '24px',
                'height': '24px',

                'display': 'flex',
                'placeContent': 'center',
                'placeItems': 'center',

                'backgroundColor': 'white',

                'borderRadius': '50%',

                'fontSize': '0.85rem'
              }}
            >
              {counter}
            </span>
          )}

          onClick={handleClickAdd}
        >
          Добавить
        </Button>

        <Button
          beforeLabel={(
            <span className="material-symbols-outlined">
              remove
            </span>
          )}

          onClick={handleClickSub}
        />
      </div>
    )
  }
};