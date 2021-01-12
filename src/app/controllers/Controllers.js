
//model imports
var userModel=require('./../models/userModel');


exports.testController=(req,res,next)=>{
    res.status(200).json({
     app_state:"ready"
    });

}

exports.userController=(req,res,next)=>{
  res.status(200).json(userModel.userModel);

}