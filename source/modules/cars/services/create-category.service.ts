import { CategoriesRepositories } from '../repositories/categories.repository'

interface IRequest {
    name: string;
    description: string
}

const categoriesRepository = new CategoriesRepositories()

class CreateCategoryService {
  async execute ({ name, description }: IRequest) {
    const categoryAlreadyExists = await categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error('Category already exists')
    }

    await categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryService }
