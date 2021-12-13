import { ICategoriesRepositories } from '../repositories/icategories.repository'

interface IRequest {
    name: string;
    description: string
}

class CreateCategoryService {
  // eslint-disable-next-line no-useless-constructor
  constructor (private categoriesRepository: ICategoriesRepositories) { }

  async execute ({ name, description }: IRequest) {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error('Category already exists')
    }

    await this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryService }