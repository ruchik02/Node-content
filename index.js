<<<<<<< HEAD
const express=require('express');
const router = require('./routes');
const app=express();
const port=8000;

// use express router
app.use('/',require('./routes'));
router.use('/users',require('./routes/users'));
router.use('/password',require('./routes/password'));
app.listen(port,function(err){
    if(err){
        console.log( `error: ${err}`);
    }
    console.log( `server is running on port: ${port}`);
})
=======
const fs=require('fs');
// fs.writeFileSync('read.txt',"Welcome to my channel ");
// fs.writeFileSync('read.txt'," Thapa technical ,Welcome to my channel ");
// fs.appendFileSync('read.txt',"Ruchika sharma");
// const buf_data=fs.readFileSync('read.txt');
// console.log(buf_data);
// org_data=buf_data.toString();
// console.log(org_data);
fs.renameSync('read.txt',"readwrite.txt");
>>>>>>> 689fa21baa8649407ee46fd7944c09c2f76af8cb
