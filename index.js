const express=require('express');
const path=require('path');
const port=8000;
const db=require('./config/mongoose');
const Contact=require('./models/contact');
const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));


var contactList=[
    {
        name:'ruchika',
        phone: '9588762856'
    },
    {
        name:'Kirti',
        phone:'8221820300'
    }
];
// app.get('/contact',function(req,res){
//     return res.render('pratice',{
//         title:'contact bar'
//     });
// });
app.get('/',function(req,res){
    Contact.find({},function(err,contacts){
        if(err){
            console.log("error in fetching contacts from db");
            return;
        }
        return res.render('contact',{
            title:"Contact List",
            contact_list:contacts
        })
    })
});
app.get('/contact',function(req,res){
    Contact.find({},function(err,contacts){
        if(err){
            console.log("error in fetching contacts from db");
            return;
        }
        return res.render('home',{
            title:"Contact List",
            contact_list:contacts
        })
    })
    });
app.post('/create-contact',function(req,res){
    Contact.create({
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email
    },function(err,newContact){
        if(err){
            console.log('Error in creating a contact!');
            return;
        }
        console.log('***********',newContact);
        return res.redirect('back');
    })
})

app.listen(port,function(err){
    if(err){
        console.log("Error in running server");
    }
    console.log("Yup!My server is running on port",port);
})
app.get('/delete-contact/',function(req,res){
    console.log("req query ",req.query);
    let id=req.query.id
    Contact.findOneAndDelete(id,function(err){
        if(err){
            console.log('error in deleting the object ');
            return;
        }   
        return res.redirect('back');
    })
});