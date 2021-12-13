import { randomUUID } from 'crypto'
import { Router } from 'express'

const categoriesRoutes = Router()

const categories = []

categoriesRoutes.post('/', async (request, response) => {
  const { name, description } = request.body

  const category = ({
    id: randomUUID(),
    name,
    description
  })

  categories.push(category)

  return response.status(201).json(category)
})

export { categoriesRoutes }
