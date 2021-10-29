import { Router, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const routes = Router()
const prisma = new PrismaClient()

routes.post('/', async (request: Request, response: Response) => {
  const { username, email, password } = request.body
  const CreatedUser = await prisma.user.create({
    data: {
      username: username,
      email: email,
      password: password
    }
  })
  return response.json(CreatedUser)
})

export { routes }
