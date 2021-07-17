const express = require('express');
const app = express();
const mongoose = require("mongoose");
const Teacher = require('./models/Teacher');
app.use(express.json());


//DB URL
const CONNECTION_URL = "mongodb+srv://amzuu:<Amzuu@2610>@cluster0.okf4n.mongodb.net/smosy?retryWrites=true&w=majority"

//Connection Part
mongoose.connect(
    CONNECTION_URL, { useNewUrlParser: true }, () => {
        console.log('Connected again to Database')
    }
);
//API
app.use("/addTeacher", async (req, res) => {
    const response = await new Teacher({
        photo:req.body.photo,
        lastName:req.body.lastName,
        firstName:req.body.firstName,
        username:req.body.username,
        password:req.body.password,
        teaching:req.body.teaching,
        level:req.body.level,
        education:req.body.education,
        sex:req.body.sex,
        meritalStatus:req.body.meritalStatus,
        yearofBirth:req.body.yearofBirth,
        dateToJoin:req.body.dateToJoin,
        mobile:req.body.mobile,
        status:req.body.status,
    }).save();

    res.status(200).send(response);
});

app.listen(5000, () => {
    console.log('Connected......')
})