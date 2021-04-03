const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()


//register user


router.post("/", [
        body('firstname').isAlpha(),
        body('lastname').isAlpha(),
        body('email').isEmail(),
        body('phone').isNumeric(),
        body('password').isLength({ min: 5 })
    ],
    (req, res) => {
         const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        User.find({email:req.body.email}).then(users=>{
            console.log(users.isLength);
            if(users.isLength){
                console.log('je suis la !');
                return res.status(400).send({errors:[{msg:"User already exist"}]})
            }else{
            let newUser = new User (req.body)
            bcrypt.genSalt(10,(err,salt)=>{
                if(err){
                    throw err;
                }
                //console.log(salt);
                //console.log(req.body.password)
                bcrypt.hash(req.body.password,salt,(err2,hashedPwd) =>{
                    if(err2){
                        throw err2;
                    }
                   newUser.password = hashedPwd;
                   newUser.save();
                   let payload = {
                       userId:newUser._id
                   }
                   jwt.sign(payload,'toto',(err,token)=>{
                       if(err){
                           throw err
                       }
                       res.send({token})
                   })
                    
                });
            });
            }
        });

    });
module.exports = router;