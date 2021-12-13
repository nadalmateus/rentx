import { Category } from '@prisma/client'

export interface ICreateCategoryDTO {
    name: string;
    description: string
}

interface ICategoriesRepositories {
    findByName(name: string): any
    list(): Promise<Category[]>
    create({ name, description }: ICreateCategoryDTO): void
}

export { ICategoriesRepositories }
