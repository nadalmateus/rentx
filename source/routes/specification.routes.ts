import { Router } from 'express'
import { CreateSpecificationService } from '../modules/cars/services/create-specification.service'

const specificationRoutes = Router()

specificationRoutes.post('/', (request, response) => {
  const { name, description } = request.body

  const createSpecificationService = new CreateSpecificationService()

  createSpecificationService.execute({ name, description })

  return response.status(201).send()
})

export { specificationRoutes }
