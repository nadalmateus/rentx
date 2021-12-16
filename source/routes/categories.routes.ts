import { Router } from 'express'
import { createCategoryController } from '../modules/cars/use-cases/categories.use-cases/create-category/create-category.index'
import { listCategoryController } from '../modules/cars/use-cases/categories.use-cases/list-category/list-category.index'

const categoriesRoutes = Router()

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get('/', async (request, response) => {
  return listCategoryController.handle(request, response)
})

export { categoriesRoutes }
