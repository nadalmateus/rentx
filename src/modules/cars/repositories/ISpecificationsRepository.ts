import { Specification } from "../model/Specification";

interface ICreateSpecificationsDTO {
    name: string;
    description: string;
}
interface ISpecificationsRepository {
    create({ description, name }: ICreateSpecificationsDTO): void;
    findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationsDTO };
