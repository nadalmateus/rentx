"use strict";
exports.__esModule = true;
exports.specificationRoutes = void 0;
var express_1 = require("express");
var specification_repository_1 = require("../modules/cars/repositories/specification.repository");
var create_specification_service_1 = require("../modules/cars/services/create-specification.service");
var specificationRoutes = (0, express_1.Router)();
exports.specificationRoutes = specificationRoutes;
var specificationsRepository = new specification_repository_1.SpecificationRepository();
specificationRoutes.post('/', function (request, response) {
    var _a = request.body, name = _a.name, description = _a.description;
    var createSpecificationService = new create_specification_service_1.CreateSpecificationService(specificationsRepository);
    createSpecificationService.execute({ name: name, description: description });
    return response.status(201).send();
});
//# sourceMappingURL=specification.routes.js.map