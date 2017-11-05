const mongoose=require('mongoose');

const Schema =mongoose.Schema;

const userSchema=new Schema({
    role: String,
    first_name: String,
    last_name: String,
    user_name: String,
    email: String,
    password: String,
    password_confirmation: String

});

module.exports=mongoose.model('user', userSchema,'users');