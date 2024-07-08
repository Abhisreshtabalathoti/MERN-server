//Capable of storing data in my mongodb
const express=require('express');
const mongoose = require('mongoose');
const router=express.Router()
const Books= require('../model/Books');
const BooksSchema = mongoose.Schema({
    _id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },publidher:{
        type:String,
        required:true,
    },description:{
        type:String,
        required:true,
    },Author_id:{
        type:String,
        required:true,
    }
}) //convert this into A MONGOOSE schema 
module.exports= mongoose.model('Books',BooksSchema)