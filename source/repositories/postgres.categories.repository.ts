import { Category } from '@prisma/client'
import { ICategoriesRepositories, ICreateCategoryDTO } from './icategories.repository'

class PostgresCategoriesRepositories implements ICategoriesRepositories {
  findByName (name: string): Category {
    console.log(name)
    throw new Error('Method not implemented.')
  }

  list (): Category[] {
    throw new Error('Method not implemented.')
  }

  create ({ name, description }: ICreateCategoryDTO): void {
    throw new Error('Method not implemented.')
  }
}
export { PostgresCategoriesRepositories }
