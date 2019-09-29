import * as mongoose from 'mongoose'                                                                                          
                                                                                   
export class Db{                                                                   
    constructor(){                                                                 
        //                                                      
    }    
    
    private static url:string = "mongodb://localhost:27017/test-db"; 
                                                                                   
    public static connectDb(){                                                           
                
        mongoose.connect(this.url)                                         
            .then(() => {console.log("Db connected")})                                                         
            .catch((err) =>{console.log(err)})                                     
    }                                                                              
                                                                                   
    public async query(){                                                          
        //Define schema                                                            
        let userSchema = new mongoose.Schema({                                     
            Name : String,                                                         
            ID: Number                                                             
        });                                                                        
        //retrieve all the users                                                   
        let usermodel = mongoose.model('User', userSchema);                        
        //let userlist = await usermodel.updateOne({},{Name:"AAA",ID:234},{upsert:true}).exec();
        let data = await usermodel.find().exec()                                   
        console.log(data);                                                         
    }                                                                              
                                                                                   
}                                                                                  
                                                                                   
//let connectObj = new Db();                                                  
                                                                                   
//connectObj.query()                           