const express=require('express');
const router=express.Router();

const passwordControllers=require('../controllers/password_controller');

router.get('/password',passwordControllers.password);
module.exports=router;