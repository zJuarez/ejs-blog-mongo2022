
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


router.get('/edit/:id', async (req,res) =>{
  let id = req.params.id
  let post = await Post.findById(id)

  res.render('edit',{post});
});

router.post('/edit/:id', async (req,res) =>{
  let id = req.params.id
  await Post.findOneAndUpdate({_id : id}, req.body)

  res.redirect("/")
});

router.post('/delete/:id', async (req,res) =>{
    let id = req.params.id
  await Post.findOneAndRemove({_id : id})
  res.redirect("/")
});


router.get('/delete/:id', async (req,res) =>{
  let id = req.params.id
  let post = await Post.findById(id)

  res.render('delete',{post});
});



module.exports = router;