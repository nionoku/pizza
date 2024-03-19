import { Select, SelectVariant, Toggle, ToggleVariant } from "~/shared"

import styles from './index.module.css'
import { CSSProperties } from "react"
import { classname } from "~/shared/utils/classname"

type Props = {
  selectedDough: ToggleVariant | null
  doughVariants: ToggleVariant[]
  onChangeSelectedDough: (dough: ToggleVariant) => void
  
  selectedSize: ToggleVariant | null
  sizeVariants: ToggleVariant[]
  onChangeSelectedSize: (size: ToggleVariant) => void

  selectedCrust: SelectVariant | null
  crustVariants: SelectVariant[]
  onChangeCrust: (crust: SelectVariant) => void

  emptyLabel?: string,

  style?: CSSProperties
  className?: string
}

const PizzaCardToggles: React.FC<Props> = ({ 
  selectedDough,
  doughVariants,
  onChangeSelectedDough,

  selectedSize,
  sizeVariants,
  onChangeSelectedSize,

  selectedCrust,
  crustVariants,
  onChangeCrust,

  emptyLabel,

  style,
  className,
}) => {
  const contentNode = () => {
    // NOTE (2024.03.11): If no one variants - render empty label
    if ([doughVariants, sizeVariants, crustVariants].every(it => !it.length)) {
      return (
        <span className={styles.empty}>
          {emptyLabel || 'Empty variants'}
        </span>
      )
    }

    return (
      <>
        {doughVariants.length && (
          <Toggle
            name="dough"
            selected={selectedDough}
            variants={doughVariants}
            onChange={onChangeSelectedDough}
          />
        )}

        {sizeVariants.length && (
          <Toggle
            name="size"
            selected={selectedSize}
            variants={sizeVariants}
            onChange={onChangeSelectedSize}
          />
        )}

        {crustVariants.length && (
          <Select
            selected={selectedCrust}
            variants={crustVariants}
            onChange={onChangeCrust}
          />
        )}
      </>
    )
  }

  return (
    <div className={classname(styles.container, className)} style={style}>
      {contentNode()}
    </div>
  )
}

export default PizzaCardToggles