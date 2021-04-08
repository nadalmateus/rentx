import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementetions/CategoriesRepository";

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);
