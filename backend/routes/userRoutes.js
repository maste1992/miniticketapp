const express =require('express');
const {signup,login, getAllUsers, getUserById}= require('../controller/userController');
const router=express.Router();
router.post('/signup',signup);
router.post('/login',login)
router.get('/allusers',getAllUsers);
router.get('/userbyid/:id',getUserById)
module.exports=router;