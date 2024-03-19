import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { PizzaCard } from "~/features";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Feature/PizzaCard',
  component: PizzaCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof PizzaCard>;

export default meta

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Домашняя',
    image: '/example-pizza-image.webp',
    price: '1 000 ₽',

    countInCart: 0,

    doughVariants: [
      {
        value: 'traditional',
        label: 'Традиционное'
      },
      {
        value: 'thin',
        label: 'Тонкое'
      },
    ],
    sizeVariants: [
      {
        value: '23',
        label: '23 см.'
      },
      {
        value: '27',
        label: '27 см.'
      },
      {
        value: '30',
        label: '30 см.'
      }
    ],
    crustVariants: [
      {
        value: '0',
        label: 'Обычный борт',
        default: true
      },
      {
        value: '1',
        label: 'Борт с моцареллой'
      },
      {
        value: '2',
        label: 'Борт с филадельфией'
      },
      {
        value: '3',
        label: 'Колбасный борт'
      },
      {
        value: '4',
        label: 'Колбасный борт с горчицей'
      },
    ]
  },
  render({ 
    label,
    image,
    price,

    doughVariants,
    sizeVariants,
    crustVariants,
  }) {
    const [countInCard, setCountInCart] = useState(0)

    const handleAddToCart = () => {
      setCountInCart(countInCard + 1)
    }

    const handleRemoveFromCart = () => {
      if (countInCard <= 0) {
        return
      }

      setCountInCart(countInCard - 1)
    }

    return (
      <PizzaCard
        label={label}
        image={image}
        price={price}

        doughVariants={doughVariants}
        sizeVariants={sizeVariants}
        crustVariants={crustVariants}

        countInCart={countInCard}
        onAdd={handleAddToCart}
        onRemove={handleRemoveFromCart}

        style={{
          'width': '300px'
        }}
      />
    )
  }
};