import {todoModel} from "./../model/todoModel"

export class TodoService{
    public static async GetAll(){
        try{
            let todoS = await todoModel.find().exec();
            return todoS;
        }
        catch(err){
            console.log(err);
        }
    }
}