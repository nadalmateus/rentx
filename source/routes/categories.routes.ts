import { Router } from 'express'
import { CategoriesRepositories } from '../modules/cars/repositories/categories.repository'
import { createCategoryController } from '../modules/cars/use-cases/create-category'

const categoriesRoutes = Router()

const categoriesRepository = new CategoriesRepositories()

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get('/', async (request, response) => {
  const all = await categoriesRepository.list()

  return response.json(all)
})

export { categoriesRoutes }
