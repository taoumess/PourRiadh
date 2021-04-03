const express = require('express')
const router = express.Router()
const {body,validationResult}=require("express-validator");
const authMiddleware = require('../helpers/authMiddleware')
const User = require('../models/User')
const bcrypt = require("bcryptjs")
require('dotenv').config()
const jwt = require('jsonwebtoken')

//LOAD CONNECTED USER
router.get("/", authMiddleware, (req, res) => {
    User.findById(req.userId).select(password)
        .then(user => {
            if (!user) {
                return res.status(404).json({ msg: 'User not found!' })
            }
            res.status(200).json(user)
        })
        .catch(err => {
            console.error(err.message)
            res.status(500).send({ msg: "Server Error" })
        });
});
//login user
router.post('/', [
    body("email","Please enter a valid email").isEmail(),
    body("password","please write your password").notEmpty(),
],(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    User.findOne({email:req.body.email}).then((user)=>{
        if(!user){
            return res.status(404).json({errors:[{msg:"Please register befor"}]})
        }
        //console.log(user);
        bcrypt.compare(req.body.password, user.password,(err,isMatch)=>{
            console.log(err);
            console.log(isMatch);
            if (err){
                return res.json({errors:[{msg:"wrong password","corp": err}]})
            }else if (!isMatch){
                return res.json({errors:[{msg:"wrong password"}]})
            }else {
                let payload = {
                    userId:user._id
                }
                jwt.sign(payload,'toto',(err,token)=>{
                    if(err){
                        throw err
                    }
                    res.send({msg:'success','token':token,'user':user})
                })
            }

        })
        
    })

})

module.exports = router