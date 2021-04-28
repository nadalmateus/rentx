import compression from 'compression'
import express from 'express'
import helmet from 'helmet'
import { categoriesRoutes } from './routes/categories.routes'
import { specificationRoutes } from './routes/specifications.routes'

const app = express()
app.use(helmet())
app.use(compression())

app.use(express.json())

app.use('/categories', categoriesRoutes)
app.use('/specifications', specificationRoutes)

app.listen(3333, () => console.log('Server running on port 3333!'))
