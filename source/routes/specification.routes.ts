import { Router } from 'express'
import { createSpecificationController } from '../modules/cars/use-cases/specifications.use-cases/create-specification/create-specification.index'
import { listSpecificationController } from '../modules/cars/use-cases/specifications.use-cases/list-specification/list-specification.index'

const specificationRoutes = Router()

specificationRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response)
})

specificationRoutes.get('/', (request, response) => {
  return listSpecificationController.handle(request, response)
})

export { specificationRoutes }
