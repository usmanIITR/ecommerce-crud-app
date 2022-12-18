const router = require('express').Router();
const UserModel = require('../models/user_model');
const bcrypt = require('bcrypt');
router.post('/createaccount' , async function(req , res) {
    const userData = req.body;
    //Encryption of password
    const password = userData.password;
    const salt  = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password , salt);
    userData.password = hashedPassword;
    const newUser = new UserModel(userData);
    await newUser.save(function (error){
        if(error){
            res.json({success:false,error:error});
            return;
        }
        res.json({success:true,data:newUser});
    });
});
module.exports = router;