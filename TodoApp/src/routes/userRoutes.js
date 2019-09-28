"use strict";
exports.__esModule = true;
var todoController_1 = require("./../controller/todoController");
var express_1 = require("express");
var todoControllerObj = new todoController_1.TodoController();
exports.userRoutes = express_1.Router();
exports.userRoutes.get('/', todoControllerObj.GetAllTodo);
