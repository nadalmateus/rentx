import { Request, Response } from 'express'
import { ListSpecificationUseCase } from './list-specification.use-case'

class ListSpecificationController {
  constructor (private listSpecificationUseCase: ListSpecificationUseCase) {}
  async handle (request: Request, response: Response): Promise<Response> {
    return response.send()
  }
}
export { ListSpecificationController }
