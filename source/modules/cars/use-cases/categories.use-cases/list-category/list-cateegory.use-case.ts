import { Category } from '@prisma/client'
import { CategoriesRepositories } from '../../../repositories/implementations/categories.repository'

class ListCategoryUseCase {
  constructor (private categoriesRepository: CategoriesRepositories) { }

  async execute (): Promise<Category[]> {
    const categories = this.categoriesRepository.list()

    return categories
  }
}

export { ListCategoryUseCase }
