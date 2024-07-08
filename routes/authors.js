const express= require('express')
const router = express.Router()
const Author = require('../model/Author');
router.post('/',(req,res)=>{
    try{
    const {_id,name,age,totalbooks,description}=req.body;
    const AuthorQuery = new Author({_id,name,age,totalbooks,description});
   // we can save it to the database
    AuthorQuery.save()
    res.status(201).send({message:"User Created"});
    }catch(err){
        res.status(500).send({message:err})
    }
    router.get('/',async (req,res)=>{
        try{
            const data = await Author.find();
            res.status(201).send(data);
        }catch(err){
            res.status(500).send({message:err})
        }
    })
})
module.exports=router;