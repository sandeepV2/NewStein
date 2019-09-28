"use strict";
exports.__esModule = true;
var userRoutes_1 = require("./../routes/userRoutes");
var Route = /** @class */ (function () {
    function Route() {
    }
    Route.configRoutes = function (app) {
        app.get('/', function (req, res) {
            res.status(200).send("API is working");
        });
        app.use('/api/todo/', userRoutes_1.userRoutes);
    };
    return Route;
}());
exports.Route = Route;
