const User=require('../models/user')
// render the profile page
module.exports.profile=function(req,res){
   if(req.cookies.user_id){
       User.findById(req.cookies.user_id,function(err,user){
           if(user){
               return res.render('user_profile',{
                   title:"User Profile",
                   user:user
               })
           }else{
         
           return res.redirect('/users/sign-in');
           }
       });
    }else{
        return res.redirect('/users/sign-in');
     
   }
}
// render the sign up page
module.exports.signUp=function(req,res){
    return res.render('user_Sign_up',{
        title: "Codeial | Sign Up"
    })
}
// render the sign in page
module.exports.signIn=function(req,res){
    return res.render('user_Sign_in',{
        title:"Codeial | Sign In"
    })
}
// get the sign up data 
module.exports.create = function(req, res){
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    
User.findOne({email:req.body.email},function(err,user){
    if(err){
        console.log('error in finding user signing up ');
        return;
     }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log("error in creating user while signing Up");
                    returns;
                }
                return res.redirect('/users/sign-in')
            })
        }else{
            return res.redirect('back');
        }
})
}

// sign in and create the session for the user
module.exports.createSession=function(req,res){
    // steps to authenticate
    //find the user 
    User.findOne({email:req.body.email},function(err,user){
      if(err){
          console.log("error in finding user in sign-in ");
         return ;
      }
         //handle user found
         if(user){
             //handle password which don't match 
             if(user.password!=req.body.password){
                 return res.redirect('back');
             }
              //handle session creation 

              res.cookie('user_id',user.id);
              return res.redirect('/users/profile');

         }else{
          return res.redirect('back');
         }
    });

 

    

   
    //handle user not found 

}