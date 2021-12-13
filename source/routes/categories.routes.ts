import { randomUUID } from 'crypto'
import { Router } from 'express'
import { clientPrisma } from '../services/prisma'

const categoriesRoutes = Router()

categoriesRoutes.post('/', async (request, response) => {
  const { name, description } = request.body

  const createCategory = await clientPrisma.category.create({
    data: {
      id: randomUUID(),
      name,
      description,
      createdAt: new Date()
    }
  })
  return response.status(201).json(createCategory)
})

export { categoriesRoutes }
