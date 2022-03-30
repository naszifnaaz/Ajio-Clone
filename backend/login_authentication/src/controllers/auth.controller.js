const User = require("../models/user.model")
const jwt = require('jsonwebtoken');
require('dotenv').config()

const generateToken = (user) => {
    return jwt.sign({user}, `${process.env.SECRET_KEY}`)
}
const register = async (req, res) => {
    try{

        let user = await User.findOne({mobile : req.body.mobile})
   
        //checking mobile
        if(user){
            return res.status(400).send({message : "mobile already exists" })
        }

        // if new user, create it or allow to register;
        user = await User.create(req.body);

        const token = generateToken(user)
        return res.status(200).send({user, token});
    }
    catch(err){
        res.status(400).send({message : err.message})
    }
}

const login = async (req, res) => {
    try{
        
        const user = await User.findOne({mobile : req.body.mobile})
        //checked if mobile exists
        if(!user){
            return res.status(400).send("Wrong mobile or Password")
        }

        //if mobile exists, check password;
        const match = user.checkPassword(req.body.password)

        // if it doesn't match
        if(!match){
            return res.status(400).send({message : "Wrong mobile or Password"})
        }

        // if it matches
        const token = generateToken(user)
        return res.status(200).send({user, token});


    }
    catch(err){
        res.status(400).send({message : err.message})
    }
}

module.exports = {register,login}

