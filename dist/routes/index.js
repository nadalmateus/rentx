"use strict";
exports.__esModule = true;
exports.routes = void 0;
var express_1 = require("express");
var categories_routes_1 = require("./categories.routes");
var specification_routes_1 = require("./specification.routes");
var routes = (0, express_1.Router)();
exports.routes = routes;
routes.use('/categories', categories_routes_1.categoriesRoutes);
routes.use('/specifications', specification_routes_1.specificationRoutes);
//# sourceMappingURL=index.js.map