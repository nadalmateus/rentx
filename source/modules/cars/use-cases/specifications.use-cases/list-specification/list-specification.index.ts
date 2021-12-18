import { ListSpecificationController } from './list-specification.controller'
import { ListSpecificationUseCase } from './list-specification.use-case'

const listSpecificationUseCase = new ListSpecificationUseCase()
const listSpecificationController = new ListSpecificationController(listSpecificationUseCase)

export { listSpecificationController }
