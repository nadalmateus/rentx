import { SpecificationRepository } from '../../repositories/implementations/specification.repository'
import { CreateSpecificationController } from './create-specification.controller'
import { CreateSpecificationUseCase } from './create-specification.use-cases'

const specificationRepository = new SpecificationRepository()
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository)
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

export { createSpecificationController }
