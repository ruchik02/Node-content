module.exports.profile=function(req,res){
    // res.end('<h1>Hello ,this is user profile page</h1>');
   return res.render('profile',{
        title:"users"
    })
}