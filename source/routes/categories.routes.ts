import { Router } from 'express'
import { CategoriesRepositories } from '../repositories/categories.repository'

const categoriesRoutes = Router()

const categoriesRepository = new CategoriesRepositories()

categoriesRoutes.post('/', async (request, response) => {
  const { name, description } = request.body

  categoriesRepository.create({ name, description })

  return response.status(201).send()
})
categoriesRoutes.get('/', async (request, response) => {
  const all = await categoriesRepository.list()

  return response.json(all)
})

export { categoriesRoutes }
