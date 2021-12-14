"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var compression_1 = __importDefault(require("compression"));
var routes_1 = require("../routes");
var server = (0, express_1["default"])();
server.use((0, helmet_1["default"])());
server.use((0, compression_1["default"])());
server.use(express_1["default"].json());
server.use(routes_1.routes);
var port = 3333;
server.listen(port, function () { console.log("SERVER RUNNING ON http://localhost:".concat(port, "/")); });
//# sourceMappingURL=server.js.map