
const express = require('express');
const router = express.Router();
const Post = require('../model/post');


router.get('/', async function(req,res){

  let posts = await Post.find()

  res.render('index',{posts});
});


router.get('/newPost', async (req,res) =>{
  res.render('newPost');
});

router.post('/newPost', async (req,res) =>{

  let post = new Post(req.body)
  await post.save()
  res.redirect("/")
});




module.exports = router;