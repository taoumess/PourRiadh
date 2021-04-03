const express = require('express')
const router = express.Router()
const authMiddleware = require('../helpers/authMiddleware')
const Post = require('../models/Post')

//Add new post
router.post('/',authMiddleware,(req,res) =>{
    let newPost = new Post({...req.body,owner: req.userId})
    newPost.save()
    .then(post =>res.status(201).send(post))
    .catch(err => {
        console.error(err.message)
        res.status(500).send({ msg: "Server Error" })
    });
})
//Get All posts
router.get('/',authMiddleware,(req,res)=>{
    Post.find()
    .then(posts=> res.send(posts))
    .catch((err)=>{
        console.error(err.message);
        res.status(500).send({msg:"server"});
    });
})

module.exports = router
//Get user posts
router.get('/myPosts',authMiddleware,(req,res)=>{
    User.find({owner:req.userId})
    .then(posts=> res.send(posts))
    .catch((err)=>{
        console.error(err.message);
        res.status(500).send({msg:"server"});
    });
})