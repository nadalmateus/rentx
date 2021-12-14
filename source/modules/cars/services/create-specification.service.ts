import { SpecificationRepository } from '../repositories/specification.repository'

interface IRequest {
    name: string;
    description: string
}

const specificationRepository = new SpecificationRepository()

class CreateSpecificationService {
  async execute ({ name, description }: IRequest) {
    const specificationAlreadyExists = await specificationRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists')
    }

    await specificationRepository.create({ name, description })
  }
}
export { CreateSpecificationService }
