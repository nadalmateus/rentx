export interface ICreateSpecificationDTO {
name: string;
description: string
}

interface ISpecificationRepository {
    create({ name, description }: ICreateSpecificationDTO): void
    findByName(name: string): any
}

export { ISpecificationRepository }
