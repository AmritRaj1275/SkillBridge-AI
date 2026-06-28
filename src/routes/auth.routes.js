// const { Router } = require("express")
// const authRouter = Router()  #This is also a way to write in codebases, just marked for futre review 

const express = require('express')

const authController = require("../controllers/auth.controller")

const authRouter = express.Router()

/**
 * @route POST /api/auth/register
 * @description Register new User
 * @access Public
 */
authRouter.post("/register",authController.registerUserController)


/**
 * @route POST /api/auth/login
 * @description login user with email and password
 * @access Public 
 */
authRouter.post("/api/login", authController.loginUserController)

module.exports = authRouter