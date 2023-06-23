class LoginValidation{

    static Loginvalidate(req,res,next){
        if(!req.isAuthenticated()){
            req.flash("error", "You need to login First");
            return res.redirect('/login');
        }
          next();
    }
}

exports = module.exports = LoginValidation;