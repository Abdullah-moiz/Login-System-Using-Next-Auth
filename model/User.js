import mongoose from "mongoose";

const UserSchema =  mongoose.Schema({
    name : String ,
    password : String , 
    email : String,
},{timestamps: true})

const User = mongoose.models.User || mongoose.model("User" , UserSchema);

export default User;