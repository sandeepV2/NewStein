import * as express from 'express'
import {cardRoutes} from "./../routes/cardRoutes"
import {userRoutes} from "./../routes/userRoutes"
import { throws } from 'assert';

export class Route{

    public static configRoutes(app:express.Application){
        app.get('/', (req:express.Request, res:express.Response) => {
            res.status(200).send("API is working");
        });
        app.use('/api/cards/', cardRoutes)
    }
}