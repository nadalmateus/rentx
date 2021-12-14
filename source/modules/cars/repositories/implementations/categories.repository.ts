import { randomUUID } from 'crypto'
import { Category } from '@prisma/client'
import { clientPrisma } from '../../../../services/prisma'
import { ICategoriesRepositories, ICreateCategoryDTO } from '../icategories.repository'

class CategoriesRepositories implements ICategoriesRepositories {
  async create ({ name, description }: ICreateCategoryDTO): Promise<ICreateCategoryDTO> {
    const createCategory = await clientPrisma.category.create({
      data: {
        id: randomUUID(),
        name,
        description,
        createdAt: new Date()
      }
    })
    return createCategory
  }

  async list (): Promise<Category[]> {
    const listAllCategories = await clientPrisma.category.findMany()
    return listAllCategories
  }

  async findByName (name: string) {
    const category = await clientPrisma.category.findFirst({
      where: { name }
    })
    return category
  }
}

export { CategoriesRepositories }
