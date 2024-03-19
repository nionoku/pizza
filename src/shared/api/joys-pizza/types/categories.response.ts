type Category = {
  _id: string
  name: string
  isIncludedInMenu?: boolean
  tags: string[]
  backgroundPic?: string
  iconPic?: string
  removableIngredientsCustomization?: boolean
  order?: number
}

export type CategoriesResponse = Category[]