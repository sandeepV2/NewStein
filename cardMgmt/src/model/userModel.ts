import * as mongoose from 'mongoose'

let userSchema = new mongoose.Schema(
    {
        name:{type:String, required:true},
        email:{type:String, required:true, unique:true},
        mobile:{type:String, required:true, unique:true},
        password:{type:String, required:true},
        role:{type:String},
        Archive :String,
        CreatedDate:{type:Date,
             default:Date.now}

    }
);

// Register todo schema with Db
// todo Table collection name
// todoSchema - Schema of collection

export const userModel = mongoose.model('user', userSchema)