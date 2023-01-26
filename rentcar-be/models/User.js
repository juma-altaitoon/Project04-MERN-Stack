const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    birthdate: Date,
    gender:Boolean,
    nationality:String,
    national_id:String,
    phone_number:String,
    email_address:String,
    password:String,
    documents:String,
    license_issued:Date,
    license_expiry:Date,
    user_type:Boolean,
    comment:String



},{timestamps: true}) 


const User = mongoose.model("User", userSchema , "User");
module.exports = User;