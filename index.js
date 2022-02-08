const express=require('express');
const router = require('./routes');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');
app.use(expressLayouts);
app.use(express.static('./assets'));
//extract style and script from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// set up the view engine
app.set('view engine','ejs');
app.set('views','./views');
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

