import { Router } from 'express'
import { SpecificationRepository } from '../modules/cars/repositories/specification.repository'
import { CreateSpecificationService } from '../modules/cars/services/create-specification.service'

const specificationRoutes = Router()

const specificationsRepository = new SpecificationRepository()

specificationRoutes.post('/', (request, response) => {
  const { name, description } = request.body

  const createSpecificationService = new CreateSpecificationService(specificationsRepository)

  createSpecificationService.execute({ name, description })

  return response.status(201).send()
})

export { specificationRoutes }
