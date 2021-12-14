import { CategoriesRepositories } from '../../../repositories/categories.repository'
import { ListCategoryUseCase } from './list-cateegory.use-case'
import { ListCategoryController } from './list-category.controller'

const categoriesRepository = new CategoriesRepositories()
const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository)
const listCategoryController = new ListCategoryController(listCategoryUseCase)

export { listCategoryController, listCategoryUseCase }
