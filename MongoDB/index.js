const express = require ('express');
var mongoose  = require('mongoose');
const app = express();

mongoose.connect("mongodb://localhost:27017/Jaymin")


const userSchema= mongoose.Schema({
    id:Number,
    name:String,
    email:String,
    password:String
});

// create model/table appy validation on table coumn
const userModel=mongoose.model("user",userSchema);


app.use(express.json ())

app.get("/",async (req,resp)=> {
    let data = new userModel
    mongoose.createCollection('product')
    console.log("Collection add success");
    

} );


app.listen(5000)
