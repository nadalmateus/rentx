import { CategoriesRepositories } from '../../../repositories/categories.repository'
import { CreateCategoryController } from './create-category.controller'
import { CreateCategoryUseCase } from './create-category.use-case'

const categoriesRepository = new CategoriesRepositories()
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export { createCategoryController, createCategoryUseCase }
