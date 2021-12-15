import { Request, Response } from 'express'
import { ImportCategoryUseCase } from './import-category.use-case'

class ImportCategoryController {
  constructor (private importcategoryUseCase: ImportCategoryUseCase) {}
  async handle (request: Request, response: Response): Promise<Response> {
    const { file } = request

    this.importcategoryUseCase.execute(file)

    return response.send()
  }
}

export { ImportCategoryController }
