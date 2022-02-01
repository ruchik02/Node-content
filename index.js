const express=require('express');
const router = require('./routes');
const app=express();
const port=8000;

// use express router
app.use('/',require('./routes'));
router.use('/users',require('./routes/users'));
app.listen(port,function(err){
    if(err){
        console.log( `error: ${err}`);
    }
    console.log( `server is running on port: ${port}`);
})
