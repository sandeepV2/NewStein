import * as express from 'express'
import {todoRoutes} from "./../routes/todoRoutes"
import { throws } from 'assert';
import { userRoutes } from "./../routes/userRoutes";
import { AuthenticateService } from "./../middleware/authenticate";

export class Route{

    public static configRoutes(app:express.Application){
        app.get('/', (req:express.Request, res:express.Response) => {
            res.status(200).send("API is working");
        });
        app.use('/api/todo/', todoRoutes)
        //app.use(AuthenticateService.authenticate)
        app.use('/api/users/', userRoutes)
    }
}
