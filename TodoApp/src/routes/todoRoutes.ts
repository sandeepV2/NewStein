import {TodoController} from "./../controller/todoController"

import {Router} from 'express'

let todoControllerObj = new TodoController();

export let todoRoutes = Router()
todoRoutes.get('/', todoControllerObj.GetAllTodo);

