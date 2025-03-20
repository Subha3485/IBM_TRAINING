const express =require('express');
const { signUp } = require('../controlers/user.controler');

const userRouter =express.Router();

userRouter.post("/regester", signUp);

module.exports {
    userRouter
}