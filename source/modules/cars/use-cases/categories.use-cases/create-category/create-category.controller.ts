import { Request, Response } from 'express'
import { CreateCategoryUseCase } from './create-category.use-case'

class CreateCategoryController {
  constructor (private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body

    this.createCategoryUseCase.execute({ name, description })

    return response.status(201).send()
  }
}
export { CreateCategoryController }
