import * as express from 'express';
import * as Jwt from 'jsonwebtoken';

import {permission12, permissionTypes} from "./permission"
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

    public static authorization(req:any, res:express.Response, next:any){

        if (req.user.role != 'admin'){
            res.status(401).send('Authorization failed');
        }
        next()

        /*let accessToken = req.header("Authorization");
        if (!accessToken){
            res.send("Access Denied");
        }
        try{
            let decodedData =  Jwt.verify(accessToken, "MySecretKey");
            req.user = decodedData;
            
        }
        catch(err){
            console.log(err);
            res.status(401).send('Bad Request, Access Denied');
        }*/
    }
    public static checkPermission(req:any,res:any, permissionName:permissionTypes){
       // console.log(permission.admin.values)
        console.log(permissionName)
        console.log(permission12.admin)
        let role = req.user.role;
        if (permission12[role].includes(permissionName)){
            return;
        }
        return res.send("permission denied");
    }
}

// TO DO Add authorization function here to return admin.