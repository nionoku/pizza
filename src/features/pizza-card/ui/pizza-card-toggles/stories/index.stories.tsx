import { Meta, StoryObj } from "@storybook/react";

import PizzaCardToggles from "../ui/index";
import { useState } from "react";
import { SelectVariant, ToggleVariant } from "~/shared";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Features/PizzaCardToggles',
  component: PizzaCardToggles,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    onChangeSelectedDough: {
      type: 'function',
      action: 'change selected dough'
    },
    onChangeSelectedSize: {
      type: 'function',
      action: 'change selected sizes'
    },
    onChangeCrust: {
      type: 'function',
      action: 'change selected crust'
    }
  },
} satisfies Meta<typeof PizzaCardToggles>;

export default meta

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    selectedDough: null,
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

    selectedSize: null,
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

    selectedCrust: null,
    crustVariants: [
      {
        value: '1',
        label: 'Обычный борт',
        default: true
      },
      {
        value: '2',
        label: 'Борт с моцареллой'
      },
      {
        value: '3',
        label: 'Борт с филадельфией'
      },
      {
        value: '4',
        label: 'Колбасный борт'
      },
      {
        value: '5',
        label: 'Колбасный борт с горчицей'
      },
    ]
  },
  render({
    doughVariants,
    onChangeSelectedDough,
    
    sizeVariants,
    onChangeSelectedSize,

    crustVariants,
    onChangeCrust,
  }) {
    const [selectedDough, setSelectedDough] = useState<ToggleVariant | null>(null)
    const [selectedSize, setSelectedSize] = useState<ToggleVariant | null>(null)
    const [selectedCrust, setSelectedCrust] = useState<SelectVariant | null>(null)
    
    const handleChangeDough = (dough: ToggleVariant) => {
      setSelectedDough(dough)
      onChangeSelectedDough(dough)
    }
    
    const handleChangeSize = (size: ToggleVariant) => {
      setSelectedSize(size)
      onChangeSelectedSize(size)
    }
    
    const handleChangeCrust = (crust: SelectVariant) => {
      setSelectedCrust(crust)
      onChangeCrust(crust)
    }

    return (
      <PizzaCardToggles 
        selectedDough={selectedDough}
        doughVariants={doughVariants}
        onChangeSelectedDough={handleChangeDough}
        
        selectedSize={selectedSize}
        sizeVariants={sizeVariants}
        onChangeSelectedSize={handleChangeSize}

        selectedCrust={selectedCrust}
        crustVariants={crustVariants}
        onChangeCrust={handleChangeCrust}

        style={{
          'width': '300px'
        }}
      />
    )
  }
};

export const Empty: Story = {
  args: {
    selectedDough: null,
    doughVariants: [],

    selectedSize: null,
    sizeVariants: [],

    selectedCrust: null,
    crustVariants: [],

    emptyLabel: 'Не настраивается'
  },
  render() {
    return (
      <PizzaCardToggles 
        selectedDough={null}
        doughVariants={[]}
        onChangeSelectedDough={() => undefined}
        
        selectedSize={null}
        sizeVariants={[]}
        onChangeSelectedSize={() => undefined}

        selectedCrust={null}
        crustVariants={[]}
        onChangeCrust={() => undefined}

        style={{
          'width': '300px'
        }}
      />
    )
  }
};