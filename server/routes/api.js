const express=require('express');
const router=express.Router();

const mongoose=require('mongoose');

const User=require('../models/user');

var nodemailer = require('nodemailer');
// const app=express();


const db="mongodb://raj:raj@ds243285.mlab.com:43285/e-comm";
mongoose.Promise=global.Promise;

mongoose.connect(db,(err)=>{
    if(err){
        console.log("Error !"+err);
    }
});

router.get('/',function(req,res){
    res.send('Api Works');
});



//nodeMailer

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'newsapp007@gmail.com',
        pass: 'Awari@gmail'
    }
});

let mailOptions = {
    from: 'newsapp007@gmail.com',
    to: 'hrishiawari007@gmail.com',
    subject: 'Hi ffffferr',
    text: 'this is gauri auti testing (FU)',
};

router.options('/sendmail', function (req, res) {
  res.sendStatus(200);
});


router.post('/sendmail', function (req, res) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); // Change this to your Angular 2 port number
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', '*');

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });

})
//--nodeMailer ends here

router.get('/users',(req,res)=>{
    console.log('Request for all users:');
    User.find({})
    .exec((err,users)=>{
        if(err){
            console.log('Error retriving');
        }else{
            res.json(users);
        }

    });
});





router.get('/users/:id',function(req,res){
    console.log('Get request for single user');
    User.findById(req.params.id)
    .exec(function(err,user){
        if (err){
            console.log('Error retrieving user');
        }else{
            res.json(user);
        }
    });
});



router.get('/login/:email/:password',function(req,res){
    var em=req.params.email;
    var pass=req.params.password;
    console.log('Get request for single user');
    User.findOne({email : em,password:pass})
    .exec(function(err,user){
        if (err){
            console.log('Error retrieving user');
        }else{
            res.json(user);
        }
    });
});


router.post('/saveuser',(req,res)=>{
    console.log("Save the new user");
    var newUser=new User();
    newUser.role=req.body.role;
    newUser.first_name=req.body.first_name;
    newUser.last_name=req.body.last_name;
    newUser.user_name=req.body.user_name;
    newUser.email=req.body.email;
    newUser.password=req.body.password;
    newUser.password_confirmation=req.body.password_confirmation;

    newUser.save((err,insertedUser)=>{
        if(err){
            console.log('Error saving video');
        }else{
            res.json(insertedUser);
        }
    });
});




module.exports=router;