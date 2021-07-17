const mongoose = require("mongoose");


const TeacherSchema = mongoose.Schema({
    photo:String,
    username:String,
    password:String,
    lastName:String,
    firstName:String,
    teaching:String,
    level:String,
    education:String,
    sex:String,
    meritalStatus:String,
    yearOfBirth:String,
    dateToJoin:String,
    mobile:String,
    status:String,

});

module.exports = mongoose.model("Teacher", TeacherSchema);