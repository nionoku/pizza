import { CSSProperties, ChangeEvent } from 'react'

import styles from './index.module.css'
import { SelectVariant, classname } from '~/shared'

const DEFAULT_VARIANT = 'default'

type Props = {
  selected: SelectVariant | null
  onChange: (selected: SelectVariant) => void

  variants: SelectVariant[]
  placeholder?: SelectVariant['label']

  style?: CSSProperties
  className?: string
}

const Select: React.FC<Props> = ({
  selected,
  onChange,

  variants,
  placeholder,

  style,
  className
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selected = variants.find(it => it.value === (event.target as HTMLSelectElement).value)

    if (!selected) {
      throw new Error('Nothing selected')
    }
    
    onChange(selected)
  }

  const hasSelected = () => selected && !selected.default

  return (
    <select
      defaultValue={DEFAULT_VARIANT}
      value={selected?.value}
      onChange={handleChange}

      className={classname(styles.select, hasSelected() && styles.selected, className)}
      style={style}
    >
      {placeholder && (
        <option disabled hidden value={DEFAULT_VARIANT}>
          {placeholder}
        </option>
      )}

      {variants.map(it => (
        <option key={it.value} value={it.value}>
          {it.label}
        </option>
      ))}
    </select>
  )
}

export default Select