import {userModel} from "./../model/userModel"
import * as express from 'express'
import * as bcrypt from 'bcrypt'
import * as Jwt from 'jsonwebtoken'

export class UserService{
    public static async GetAll(){
        try{
            let users = await userModel.find().exec();
            return users;
        }
        catch(err){
            console.log(err);
        }
    }

    public static async Register(req:express.Request){
        try{
            let hashedPasswd = await bcrypt.hash(req.body.password,10);
            req.body.password = hashedPasswd;

            let newUser = new userModel(req.body);
            await newUser.save();
            return newUser
        }
        catch(error){
            console.log(error);
            return error;
        }
    }

    public static async GetUser(req:express.Request){
        try{
            let user = await userModel.findById(req.params.userId).exec();
            return user;
        }
        catch(err){
            console.log(err);
        }
    }

    /*public static async Update(req:express.Request){
        try{
            let user = await userModel.findOneAndUpdate({name:req.body.name}).exec()
        }
    }*/

    public static async Login(req:express.Request){
        try{
            //check user exists
            let user : any = await userModel.findOne({name:req.body.name}).exec();
            if (user == null){
                return `user not registered with name : ${req.body.name}`
            }
            let passwordMatch = await bcrypt.compare(req.body.password, user.password);
            if (!passwordMatch){
                return `Incorrect Password`
            }
            //return `Login Successful`;
            // Instaead on login successful return auth token.
            let options : Jwt.SignOptions = {
                expiresIn : "365d",
                algorithm : "HS256",

            };
            
            let payload = {
                userId : user._id,
                role : user.role
            };
            let secret = "MySecretKey";
            let accessToken = await Jwt.sign(payload, secret, options);
            return accessToken;
        }
        catch(err){
            console.log(err);

        }
    }
}