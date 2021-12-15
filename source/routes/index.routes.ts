import { Router } from 'express'
import { categoriesRoutes } from './categories.routes'
import { specificationRoutes } from './specification.routes'

const indexRoutes = Router()

indexRoutes.use('/categories', categoriesRoutes)
indexRoutes.use('/specifications', specificationRoutes)

export { indexRoutes }
