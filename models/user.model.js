const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    profileImage:{type : String},
    name:{type:String},
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    isAdmin:{type:Boolean,default:false},
    isDelete:{type:Boolean,default:false}
},
{
    versionKey:false,
    timestamps:true
})

module.exports= mongoose.model("users",userSchema)