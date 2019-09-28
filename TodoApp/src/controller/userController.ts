
import {Request, Response, response} from 'express'
import { request } from 'https';
import {UserService} from "./../service/userService"
import {AuthenticateService} from "./../middleware/authenticate"
import {permissionTypes} from "./../middleware/permission"

export class UserController {
    public async GetAllUser (req:Request, res:Response){
        let result = await UserService.GetAll();
        return res.json(result)
    }

    public async GetUser (req:Request, res:Response){
        let user = await UserService.GetUser(req);
        return res.json(user);

    }

    public async Register (req:Request, res:Response){
        let createUser = await UserService.Register(req);
        return res.json(createUser);
        
    }

    public async Login (req:Request, res:Response){
        try{
            let user = await UserService.Login(req);
            return res.json(user);
        }
        catch(err){
            console.log(err);
            return err;
        }
        
    }
    public async Update (req:Request, res:Response){
        try{
            let user = await UserService.Update(req);
            return res.json(user);
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public async hasPermission(req:Request, res:Response, next:any){
        // TO DO user this function within update.
        let isPerm = AuthenticateService.checkPermission(req, res,permissionTypes.userShow);
        res.send("Worked")
    }
}