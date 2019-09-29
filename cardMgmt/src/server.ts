import * as express from 'express'
import * as bodyParser from 'body-parser'

import {Request, Response} from 'express'

class UserApp{
    app: express.Application;

    constructor(){
        this.app = express()
        this.configBodyParser()
    }

    private configBodyParser(){
        this.app.use(bodyParser.json());                                           
        this.app.use(bodyParser.urlencoded({extended:false}));
    }

}

let userApp = new UserApp();

const port = 11111;

const host = 'localhost';

userApp.app.listen(port, host, () => {
    console.log('server is running');
});

userApp.app.get('/', (req:Request, res:Response)=>{
    res.send('server is running on my lucky port');
});
