import { SpecificationRepository } from '../../repositories/implementations/specification.repository'

interface IRequest {
    name: string;
    description: string
}

class CreateSpecificationUseCase {
  constructor (private specificationRepository: SpecificationRepository) { }

  async execute ({ name, description }: IRequest) {
    const specificationAlreadyExists = await this.specificationRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists')
    }

    await this.specificationRepository.create({ name, description })
  }
}
export { CreateSpecificationUseCase }
