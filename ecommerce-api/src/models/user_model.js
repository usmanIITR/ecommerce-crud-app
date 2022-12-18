const {Schema , model} = require('mongoose');
//Schema
const userSchema = new Schema({
    userid:{type: String , unique : true},
    fullName:{type:String , default:""},
    email: {type:String , unique:true},
    phone: {type: String , unique: true},
    passsword: {type: String, default:""},
    address:{type:String, default:""},
    country:{type:String, default:""},
    city:{type:String, default:""},
    pincode:{type:String, default:""},
    addedon: {type: Date , default: Date.now }
});
//Model
const userModel = model("User" ,userSchema);
module.exports = userModel;