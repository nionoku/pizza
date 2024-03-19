import { CategoryItemsResponse } from "~/shared/api/joys-pizza/types/category.response";

const BASE_URL = 'https://joyspizza.ru'

export class JoysPizzaApi {
  fetchCategory(categoryId: string): Promise<CategoryItemsResponse> {
    const url = new URL(`/api/menu/categories/${categoryId}`, BASE_URL)
    url.searchParams.set('v', '2')

    return fetch(url.href)
      .then(it => it.json())
  }
}