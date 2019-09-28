"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var db_1 = require("./startup/db");
var route_1 = require("./startup/route");
var TodoApp = /** @class */ (function () {
    function TodoApp() {
        this.app = express();
        this.configBodyParser();
        db_1.Db.connectDb();
        route_1.Route.configRoutes(this.app);
    }
    TodoApp.prototype.configBodyParser = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    };
    return TodoApp;
}());
var myTodoApp = new TodoApp();
var port = 3000;
var host = 'localhost';
myTodoApp.app.listen(port, host, function () {
    console.log('server is running');
});
