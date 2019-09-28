import * as express from 'express';
import * as Jwt from 'jsonwebtoken';
import { runInNewContext } from 'vm';

export class AuthenticateService{
    public static authenticate(req:any, res:express.Response, next:any){
        let accessToken = req.header("Authorization");
        if (!accessToken){
            res.send("Access Denied");
        }
        try{
            let decodedData =  Jwt.verify(accessToken, "MySecretKey");
            req.user = decodedData;
            console.log(req.user.role);
            next()
        }
        catch(err){
            console.log(err);
            res.status(401).send('Bad Request, Access Denied');
        }
    }
}

// TO DO Add authorization function here to return admin.
