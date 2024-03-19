type AdditionalInfo = {
  dough: string
  size: string
}

type Product = {
  _id: string
  productCategoryId: string
  isIncludedInMenu: boolean

  name: string
  price: number

  additionalInfo?: AdditionalInfo
  removableIngredients: string[]

  tags: string[]

  carbohydrateAmount?: number
  carbohydrateFullAmount?: number
  energyAmount?: number
  energyFullAmount?: number
  fatAmount?: number
  fatFullAmount?: number
  fiberAmount?: number
  fiberFullAmount?: number
}

export type CategoryItem = Product & {
  // TODO (2024.03.13): what is it?
  __v: number
  createdAt: string
  updatedAt: string

  name: string
  description: string

  products?: Product[]

  singleProduct?: boolean
  removableIngredientsCustomization: boolean

  // TODO (2024.03.13): type of recommended?
  recommended: unknown[]

  images: string[]

  new: boolean
  favorite: boolean
}

export type CategoryItemsResponse = CategoryItem[]

