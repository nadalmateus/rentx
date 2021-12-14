import { SpecificationRepository } from '../repositories/specification.repository'

interface IRequest {
    name: string;
    description: string
}

class CreateSpecificationService {
  // eslint-disable-next-line no-useless-constructor
  constructor (private specificationRepository: SpecificationRepository) { }

  async execute ({ name, description }: IRequest) {
    const specificationAlreadyExists = await this.specificationRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists')
    }

    await this.specificationRepository.create({ name, description })
  }
}
export { CreateSpecificationService }
