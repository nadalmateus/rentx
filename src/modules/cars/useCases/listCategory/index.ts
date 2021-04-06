import { CategoriesRepository } from "../../repositories/implementetions/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = null;
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase
);

export { listCategoriesController };
