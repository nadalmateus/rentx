import { Router } from 'express'
import { CategoriesRepositories } from '../modules/cars/repositories/categories.repository'
import { CreateCategoryService } from '../modules/cars/services/create-category.service'

const categoriesRoutes = Router()

const categoriesRepository = new CategoriesRepositories()

categoriesRoutes.post('/', async (request, response) => {
  const { name, description } = request.body
  const createCategoryService = new CreateCategoryService(categoriesRepository)
  createCategoryService.execute({ name, description })

  return response.status(201).send()
})

categoriesRoutes.get('/', async (request, response) => {
  const all = await categoriesRepository.list()

  return response.json(all)
})

export { categoriesRoutes }
