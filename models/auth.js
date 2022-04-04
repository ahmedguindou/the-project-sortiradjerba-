const mongoose = require("mongoose")


const UserSchema= new mongoose.Schema({
email: {type:String, required:true, unique:true },
password: {type:String, required:true},
role:{
    type:Number,default:0
},
myImage: String
// firstName : {type:String, required:true },
// lastName : {type:String, required:true }



})

module.exports= mongoose.model('User', UserSchema)