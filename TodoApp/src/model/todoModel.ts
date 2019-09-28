import * as mongoose from 'mongoose'

let todoSchema = new mongoose.Schema(
    {
        name:{type:String, required:true, unique:true},
        description :String,
        completed:Boolean,
        CreatedDate:{type:Date,
             default:Date.now}

    }
);

// Register todo schema with Db
// todo Tablea collection name
// todoSchema - Schema of collection

export const todoModel = mongoose.model('todo', todoSchema)