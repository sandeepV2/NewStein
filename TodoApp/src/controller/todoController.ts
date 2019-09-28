
import {Request, Response, response} from 'express'
import { request } from 'https';
import {TodoService} from "./../service/todoService"

export class TodoController {
    public async GetAllTodo (req:Request, res:Response){
        let result = await TodoService.GetAll();
        return res.json(result)
    }
}

export class UserController {
    public async GetAllUser (req:Request, res:Response){
        let result = await TodoService.GetAll();
        return res.json(result)
    }
}