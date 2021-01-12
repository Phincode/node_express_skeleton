const express=require('express');

const router=express.Router();

//controllers import
const Controller=require('../../controllers/Controllers');

//app install test route
router.get('/',Controller.testController);

router.get('/test/user',Controller.userController);






module.exports=router;

