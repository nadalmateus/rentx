import { Router } from 'express'
import multer from 'multer'
import { createCategoryController } from '../modules/cars/use-cases/categories.use-cases/create-category/create-category.index'
import { importCategoryController } from '../modules/cars/use-cases/categories.use-cases/import-category/import-category.index'
import { listCategoryController } from '../modules/cars/use-cases/categories.use-cases/list-category/list-category.index'

const categoriesRoutes = Router()

const upload = multer({
  dest: './temp'
})

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get('/', async (request, response) => {
  return listCategoryController.handle(request, response)
})

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController.handle(request, response)
})

export { categoriesRoutes }
