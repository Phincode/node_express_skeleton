//user model
const user=require('./../../models/user');


// user create validator

exports.userValidator=(req,res,next)=>{
  
  if(req.body.name==null){
   return res.status(403).json('value name must not be empty');
  }

  if(req.body.phone==null){
    return res.status(403).json('value phone must not be empty');

  }
  

  next();
}
