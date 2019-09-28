import * as express from 'express'
import * as bodyParser from 'body-parser'

import {Db} from "./startup/db"
import {Route} from "./startup/route"

class TodoApp{
    app: express.Application;

    constructor(){
        this.app = express()
        this.configBodyParser()
        Db.connectDb()
        Route.configRoutes(this.app)
    }

    private configBodyParser () {                                                  
        this.app.use(bodyParser.json());                                           
        this.app.use(bodyParser.urlencoded({extended:false}));                     
    }            
}

let myTodoApp = new TodoApp()

const port = 3000;

const host = 'localhost';

myTodoApp.app.listen(port, host, () => {
    console.log('server is running');
});

