'use client'

import { CSSProperties, useState } from 'react'
import styles from './index.module.css'
import { classname } from '~/shared/utils/classname'
import { Button, SelectVariant, ToggleVariant } from '~/shared'
import { PizzaCardToggles } from './pizza-card-toggles'
import Image from 'next/image'

type Props = {
  label: string
  image: string
  price: string

  doughVariants: ToggleVariant[]
  sizeVariants: ToggleVariant[]
  crustVariants: SelectVariant[]
  
  countInCart: number
  onAdd: () => void
  onRemove: () => void

  style?: CSSProperties
  className?: string
}

const PizzaCard: React.FC<Props> = ({
  label,
  image,
  price,

  doughVariants,
  sizeVariants,
  crustVariants,

  countInCart,
  onAdd,
  onRemove,

  style,
  className
}) => {
  const [selectedDough, setSelectedDought] = useState<ToggleVariant | null>(null)
  const [selectedSize, setSelectedSize] = useState<ToggleVariant | null>(null)
  const [selectedCrust, setSelectedCrust] = useState<SelectVariant | null>(null)

  return (
    <div className={classname(styles.container, className)} style={style}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={label}
          fill
        />
      </div>
      
      <h3 className={styles.label}>
        {label}
      </h3>

      <PizzaCardToggles
        selectedDough={selectedDough}
        doughVariants={doughVariants}
        onChangeSelectedDough={setSelectedDought}
        
        selectedSize={selectedSize}
        sizeVariants={sizeVariants}
        onChangeSelectedSize={setSelectedSize}

        selectedCrust={selectedCrust}
        crustVariants={crustVariants}
        onChangeCrust={setSelectedCrust}

        className={styles.toggles}
      />

      <div className={styles.footer}>
        <span className={styles.price}>
          {price}
        </span>

        <div className={styles.actions}>
          {countInCart > 0 && (
            <Button
              beforeLabel={(
                <span className="material-symbols-outlined">
                  Remove
                </span>
              )}

              onClick={onRemove}

              className={styles.remove}
            />
          )}

          <Button
            beforeLabel={(
              <span className="material-symbols-outlined">
                Add
              </span>
            )}
            // @ts-expect-error corrected
            afterLabel={countInCart > 0 && (
              <span className={styles.countInCart}>
                {countInCart}
              </span>
            )}

            onClick={onAdd}

            className={styles.add}
          >
            Добавить
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PizzaCard