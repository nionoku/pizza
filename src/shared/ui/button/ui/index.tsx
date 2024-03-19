import React, { MouseEvent, CSSProperties } from 'react'
import styles from './index.module.css'
import { classname } from '~/shared'

type Props = {
  beforeLabel?: JSX.Element
  afterLabel?: JSX.Element

  disabled?: boolean

  onClick?: (event: MouseEvent<HTMLButtonElement>) => void

  className?: string
  style?: CSSProperties
}

const Button: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  
  beforeLabel,
  afterLabel,
  
  disabled,

  onClick,

  className,
  style,
}) => {
  return (
    <button
      disabled={disabled}

      onClick={onClick}

      className={classname(styles.button, className)}
      style={style}
    >
      {beforeLabel && (
        <div className={styles.beforeLabel}>
          {beforeLabel}
        </div>
      )}

      {children && (
        <span className={classname(
          !beforeLabel && styles.contentWithMarginStart,
          !afterLabel && styles.contentWithMarginEnd
        )}>
          {children}
        </span>
      )}

      {afterLabel && (
        <div className={styles.afterLabel}>
          {afterLabel}
        </div>
      )}
    </button>
  )
}

export default Button