import { Router } from 'express'
import { categoriesRoutes } from './categories.routes'

const routes = Router()

routes.use('/categories', categoriesRoutes)

export { routes }
