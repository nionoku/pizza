import { JoysPizzaApi } from "~/shared"
import { PizzaList } from "~/widgets"

export default async function Page({ params }: { params: { category: string } }) {
  const items = await new JoysPizzaApi().fetchCategory(params.category)

  return (
    <div>
      <PizzaList items={items} />
    </div>
  )
}