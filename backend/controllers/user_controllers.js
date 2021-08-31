const jwt = require('jsonwebtoken')

const {UserDbHelper,mySqlWrapper} = require('../db')
const sqlWrapper = new mySqlWrapper();
const user = new UserDbHelper(sqlWrapper);
const secret = process.env.secret;

const register = (req,res)=>{
    if(req.user?.error){
        res.status(401).send({"succes":false,message:req.user.error})
    }
    res.send({user:req.user});
};

const login = (req,res)=>{
    const user = req.user[0];
    const body = {_id:user.id, username: user.username, role:user.role}
    const token = jwt.sign({ user: body}, secret);
    res.send({token,role:user.role})
}

module.exports = {register, login}