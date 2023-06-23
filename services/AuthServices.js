const passport = require("passport");
class AuthServices{

    static async signUp(req,res) {
        try {
            const {password, username, confirmPassword} = req.body;
            if (password !== confirmPassword) {
                req.flash("error", `password doesn't match`);
                return res.render('signup');
            }
            const user = new _db.User({username});
            await _db.User.register(user, password);
            req.login(user, function (err) {
                if (err) {
                    return next(err);
                }
                req.flash("Success", `Successfully created you account! Wecome ${
                    req.user.name
                }`);
                return res.redirect("/");
            });
        } catch (error) {
            req.flash("error", error.message);
            res.render("signup");
        }
    };
    static login(req,res){
        req.logout(function (err) {
            req.flash("error", "we miss you! good bye.");
            if (err) {
              return next(err);
            }
            res.redirect("/");
          });
    }
}

    exports = module.exports = AuthServices;