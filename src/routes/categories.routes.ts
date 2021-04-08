import { request, response, Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategories/CreateCategoryController";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategory";

const categoriesRoutes = Router();
const upload = multer({
    dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
