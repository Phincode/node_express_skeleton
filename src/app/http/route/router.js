const express=require('express');

const router=express.Router();

//controllers import
const Controller=require('../../controllers/Controllers');


//middleware import
const General=require('./../middleware/general');
const veriftoken=require('./../middleware/verifyToken');

//app install test route
router.get('/',Controller.testController);

router.get('/test/user',veriftoken.verifyTokken,Controller.userController);

//get token
router.get('/api_v1/tokken',Controller.generateToken);

//user routes
router.post('/api_v1/create_user',veriftoken.verifyTokken,General.userValidator,Controller.createUser);






module.exports=router;

