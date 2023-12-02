import express from "express";
import userModel from "../models/user.js";
import { body, validationResult } from 'express-validator';
const router = express.Router();


router.post("/creatuser",
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
    ,
    async (req, res) => {

        const errors = validationResult(req)

        try {
            if (!errors.isEmpty() && errors.errors[0].path === 'email') {
                return res.status(400).send('Invalid email address. Please try again.')
              }
              if (!errors.isEmpty() && errors.errors[0].path === 'password') {
                return res
                  .status(400)
                  .send('Password must be longer than 6 characters.')
              }

            await userModel.create({
                name: req.body.name,
                email: req.body.email,
                location: req.body.location,
                password: req.body.password
            })
            
            res.json({ success: true });
           

        }
        catch (error) {
            console.log(error);
            res.json({success: false})
        }
    })
export default router;