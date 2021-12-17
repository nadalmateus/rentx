import { Router } from 'express'
import { categoriesRoutes } from './categories.routes'
import { specificationRoutes } from './specification.routes'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../bin/server/swagger.json'

const indexRoutes = Router()

indexRoutes.get('/', swaggerUi.serve, swaggerUi.setup(swaggerFile))
indexRoutes.use('/categories', categoriesRoutes)
indexRoutes.use('/specifications', specificationRoutes)

export { indexRoutes }
