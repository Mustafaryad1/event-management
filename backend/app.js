const express = require('express');
const mysql  = require('mysql');
const bodyParser = require('body-parser');
const parsed = require('dotenv').config().parsed
const {mySqlWrapper, UserDbHelper} = require('./db')

// init app 
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());


const sqlWrapper = new mySqlWrapper();
const user = new UserDbHelper(sqlWrapper);



app.post('/register',function(req,res){

 

    var object = req.body;

    user.registerUser(object.username,object.password).then((result, err)=>{

            if(err){

                throw err;

            }

            console.log('result register:',result);

            res.send(result);

        }).catch(err=>{

            console.log('exception:',err);

            res.send(err);

        });

 

});

 

app.get('/',function(req,res){

        res.send('welcome to Node API.');

});


// run app
const port = 5000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})