
require('dotenv').config();
var jwt=require('jsonwebtoken');
const {v4 : uuidv4} = require('uuid');

//config
var config=require('./../../config/appConfig');
//model imports
var userModel=require('./../models/userModel');
var user=require('./../models/user');


exports.testController=(req,res,next)=>{
    res.status(200).json({
     app_state:"ready"
    });

}

exports.userController=(req,res,next)=>{
 return res.status(200).json(userModel.userModel);

}

//tokken generator
exports.generateToken=(req,res)=>{
    var token=jwt.sign({token:'Blackmanba&é(-)è_çà)=@$$$$$$?????:!!!'},config.TOKKEN_SECRET,{expiresIn:'24h'});
    console.log(token);
    return res.status(201).json({
       'token':token 
    });

}

//users controller
/*
create user
*/
exports.createUser=(req,res)=>{

  var data=req.body;
  var name=req.body.name;
  var phone=req.body.phone;
  //on vérifie si l'ulitisateur n'existe pas déjà
  user.findOne({phone:phone})
        .then(data=>{
           if(!data){
            const User=new user({
              userID:uuidv4(),
              name:name,
              phone:phone,
              date:Date.now().toString()
            });
            //création de l'utilisateur
            User.save()
                .then(user=>{
                    res.status(201).json({
                     reponse_code:"200",
                     data:user 
                    });
                })
                .catch(error=>{
                    res.status(500).json({
                      reponse_code:"500",
                      data:error 
                    });
                });

           }else{
            res.status(404).json('utilisateur existe déjà');
           }
        })

  
}

