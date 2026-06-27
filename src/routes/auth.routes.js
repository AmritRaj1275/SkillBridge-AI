// const { Router } = require("express")
// const authRouter = Router()  #This is also a way to write in codebases, just marked for futre review 

const express = require('express')

const authController = require("../controllers/auth.controller")

const authRouter = express.Router()

/**
 * @route POST /api/auth/register
 * @description Register new User
 * @access public
 */
authRouter.post("/register",authController.registerUserController)

module.exports = authRouter