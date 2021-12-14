import { Request, Response } from 'express'
import { CreateSpecificationUseCase } from './create-specification.use-cases'

class CreateSpecificationController {
  constructor (private createSpecificationUseCase: CreateSpecificationUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body

    this.createSpecificationUseCase.execute({ name, description })

    return response.status(201).send()
  }
}
export { CreateSpecificationController }
