const express = require("express");
const adminRouter = express.Router();
const admin = require("../model/admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");





 adminRouter.post("/admin/signup", async(req, res) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password){
        return res.status(409).json({message: "Please Enter All Field"});
    }

    let existing;

    try{
    existing = await admin.findOne({email});
    }catch(error){
      return res.status(409).json({ message:"Please Check internet" });
    }

    if(existing){
        return res.status(409).json({ message:"please login" });
    }

    let users;

    try{
        const salt = await bcrypt.genSalt(Number(process.env.SALT));

        const hassedPassword = await bcrypt.hash(password, salt);

        users = new admin({
          username, email, password: hassedPassword, date: Date.now()
        });

        await users.save();

    }catch(error){
 
        return res.status(409).json({ message: "Please Check Post Error" });

    }

    return res.status(201).json({ users });

});

 adminRouter.post("/admin/signin", async(req, res) => {
  
    const { email, password } = req.body;

    let existing;

    try {
        existing = await admin.findOne({email});
    } catch (error) {
        return res.status(409).json({ message: "Please Check Internet" });
    }

    if(!existing){
        return res.status(409).json({message: 'Please Register'});
    }

    let comparedPassword = await bcrypt.compareSync(password, existing.password);

    if(!comparedPassword){
        return res.status(409).json({ message: "Incorrect Passwword, Please Check Password" });
    }

    const token = jwt.sign({_id: this._id},  process.env.JWTKEY, {
        expiresIn: "1h"
    });

    return res.status(201).json({ existing, data: token, message: "Login Successfully" });

});


module.exports = adminRouter;