import express from 'express'
import { routes } from '../routes'

const app = express()
app.use(express.json())

app.use('/', routes)

app.listen(3333, () => { console.log('[SERVER ON] app running on http://localhost:3333') })
