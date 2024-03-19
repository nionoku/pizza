'use client'

import { CategoryItemsResponse } from '~/shared/api/joys-pizza/types/category.response'
import styles from './index.module.css'
import { PizzaCard } from '~/features'

export default function PizzaList({ items }: { items: CategoryItemsResponse }) {
  return (
    <div className={styles.container}>
      {items.map(it => (
        <PizzaCard
          key={it._id}

          label={it.name}
          image={`https://joyspizza.ru${it.images[0]}`}
          price={it.price?.toLocaleString('ru')}

          doughVariants={[]}
          sizeVariants={[]}
          crustVariants={[]}

          countInCart={0}

          onAdd={() => undefined}
          onRemove={() => undefined}
        />
      ))}
    </div>
  )
}