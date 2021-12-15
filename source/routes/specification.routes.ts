import { Router } from 'express'
import { createSpecificationController } from '../modules/cars/use-cases/specifications.use-cases/create-specification/create-specification.index'

const specificationRoutes = Router()

specificationRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response)
})

export { specificationRoutes }
