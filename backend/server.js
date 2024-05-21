const express = require('express');
const mongoose = require('mongoose');
const CORS = require('cors');
const app = express();
const env = require('dotenv').config();
const jwt = require('jsonwebtoken');
let check = 0;
// app.use(CORS());

app.use(CORS(
    {
        origin: 'http://localhost:3000',
        // origin: '*',
        credentials: true,
        optionsSuccessStatus: 200, 
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    }
));


app.use(function(req, res, next) {
    res.header('Content-Type', 'application/json;charset=UTF-8','Access-Control-Allow-Credentials', true,'Access-Control-Allow-Origin', 'http://localhost:3000',);
    next();
});

// const connect = async() =>{
//     await  mongoose.connect('mongodb://localhost:27017/Test1', {
// })
// console.log("connected");
// }


const ur = process.env.MongoDB;
console.log(ur);
mongoose.connect(process.env.MongoDB, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})

const loginSchema = new mongoose.Schema({
    username: String ,
    password: String,
    email: String,
    university: String,
    age: Number
});


const question = new mongoose.Schema({
    question1:String,
    question2:String,
    question3:String,
    question4:String,
    question5:String,
    question6:String,
    question7:String,
    question8:String,
    question9:String,
    question10:String
});

app.use(express.urlencoded({extended: true}));
console.log("connected");

// const data = {
//     username: "test",
//     password: "test",
//     email: "test",
//     university: "test",
//     age: 1
// }
app.use(express.json()); 

app.post('/SignUp', async (req, res ) => { 
    console.log("request to " + req.url + "  HOST NAME: " + req.hostname + "  IP: " + req.ip + "  METHOD: " + req.method );
    const collection = mongoose.model('login', loginSchema);
    
    const data = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        university: req.body.university,
        age: req.body.age
    } 
    const dataRecieved = await collection.findOne({email: req.body.email});
    if(dataRecieved != null){
        return res.send("User already exists");
    }else{
    const tokenData = {
        email: req.body.email,
    }
    const AcessToken = jwt.sign(tokenData,process.env.JWT_SECRET_KEY)
    await collection.insertMany([data]);
    console.log(jwt.verify(AcessToken, process.env.JWT_SECRET_KEY));
    return res.cookie("Token", AcessToken).send("Data inserted");

    // res.redirect("http://localhost:3000");
    //res.cookie("Token", AcessToken).send("Data inserted").redirect('http://localhost:3000/');
    // return res.send("Data inserted");
    }
});
app.post('/JWTAuthenticate',async (req, res ) => {
    console.log("request to " + req.url + "  HOST NAME: " + req.hostname + "  IP: " + req.ip + "  METHOD: " + req.method)
   
    if(req.headers.cookie == null){
        // console.log("No cookie");
        return res.send("No cookie");
        
    }else{
        const token = req.headers.cookie.split('=')[1];
        // console.log(token === check);
        // console.log(token);
        let data = null
        try {
         data = jwt.verify(token, process.env.JWT_SECRET_KEY);
         console.log(data);
        } catch (error) {
            console.log(error)
        }
    
        // const data = jwt.verify(token,process.env.JWT_SECRET_KEY, (err,decoded) => {console.log("error "+ err )});
        // console.log(jwt.decode(token));
        if(data == null){
            console.log("Invalid Token");
            return res.send("Invalid Token");
        }else{
            console.log("Valid Token");
            // return res.send("Valid Token");
        }
    }
});

app.post('/testRoute', async (req, res ) =>{
    console.log(req.headers.cookie.split('=')[1]);
    res.send("test route");
});


app.post('/form', async (req, res ) =>{
    
    const data = {
        question1: req.body.question1,
        question2: req.body.question2,
        question3: req.body.question3,
        question4: req.body.question4,
        question5: req.body.question5,
        question6: req.body.question6,
        question7: req.body.question7,
        question8: req.body.question8,
        question9: req.body.question9,
        question10: req.body.question10,
        
    } 
    console.log(data)
    res.send("test route");
});

app.listen(3001, () => console.log("connected at Port 3001"));
