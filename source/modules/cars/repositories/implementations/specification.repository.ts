import { randomUUID } from 'crypto'
import { Specification } from '.prisma/client'
import { clientPrisma } from '../../../../services/prisma'
import { ICreateSpecificationDTO, ISpecificationRepository } from '../ispecification.repository'

class SpecificationRepository implements ISpecificationRepository {
  async findByName (name: string) {
    const specification = await clientPrisma.specification.findFirst({
      where: { name }
    })
    return specification
  }

  async create ({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
    const createSpecification = await clientPrisma.specification.create({
      data: {
        id: randomUUID(),
        name,
        description,
        createdAt: new Date()
      }
    })
    return createSpecification
  }
}

export { SpecificationRepository }
