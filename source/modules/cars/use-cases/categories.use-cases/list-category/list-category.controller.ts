import { Request, Response } from 'express'
import { ListCategoryUseCase } from './list-cateegory.use-case'

class ListCategoryController {
  constructor (private listCategoryUseCase: ListCategoryUseCase) {}
  async handle (request: Request, response: Response): Promise<Response> {
    const all = await this.listCategoryUseCase.execute()

    return response.json(all)
  }
}

export { ListCategoryController }
