import express from "express";
import userModel from "../models/user.js";
const router = express.Router();


router.post("/loginuser",
    async (req, res) => {

    

        try {
          const UserEmail  = req.body.email;
          const userData = await userModel.findOne({UserEmail});
          if(!userData){
              return res.status(400).json({errors:"User Not exits"})
          }
          if(userData.password!==req.body.password){
               return res.status(400).json({errors:"Incorrect Password"})
          }
          res.json({success:true});   

        }
        catch (error) {
            console.log(error);
            res.json({success: false})
        }
    })
export default router;