import { request, response, Router } from "express";
import multer from "multer";

import createCategoryController from "../modules/cars/useCases/createCategories";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategory";

const categoriesRoutes = Router();
const upload = multer({
    dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
    console.log("test");
    return createCategoryController().handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
