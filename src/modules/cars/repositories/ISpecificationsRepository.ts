interface ICreateSpecificationsDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationsDTO);
}

export { ISpecificationsRepository, ICreateSpecificationsDTO };
