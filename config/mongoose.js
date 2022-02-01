// require the library
const mongoose =require('mongoose');
// connect to the database
mongoose.connect('mongodb://localhost/contacts_db');
// acquire if the connection is successful or not 
const db=mongoose.connection;
// error
db.on('error',function(err){
    console.log(err.message);
});
// up and running print the message 
db.once('open',function(){
    console.log("Successful connected to the database");
})