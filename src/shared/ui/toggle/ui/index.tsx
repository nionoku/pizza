import { CSSProperties, FormEvent } from 'react'

import styles from './index.module.css'
import { ToggleVariant } from '../types'
import { classname } from '~/shared'

type Props = {
  name: string
  selected: ToggleVariant | null
  variants: ToggleVariant[]
  onChange: (selected: ToggleVariant) => void

  style?: CSSProperties
  className?: string
}

const Toggle: React.FC<Props> = ({ 
  name,
  selected,
  variants,
  onChange, 
  
  style, 
  className
}) => {
  const handleChange = (event: FormEvent<HTMLFieldSetElement>) => {
    const selected = variants.find(it => it.value === (event.target as HTMLInputElement).value)

    if (!selected) {
      throw new Error('Nothing selected')
    }
    
    onChange(selected)
  }

  return (
    <fieldset onChange={handleChange} className={classname(styles.container, className)} style={style}>
      {variants.map((it) => {
        const isSelected = it === selected

        return (
          <label tabIndex={0} key={it.value} className={`${styles.label} ${isSelected && styles.labelActive}`}>
            <span>
              {it.label}
            </span>
  
            <input
              type="radio"
              name={name}
              value={it.value}
              defaultChecked={isSelected}
              className={styles.input}
            />
          </label>
        )
      })}
    </fieldset>
  )
}

export default Toggle