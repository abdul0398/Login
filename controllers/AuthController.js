const passport = require("passport");
const AuthServices = require("../services/AuthServices");
/**
 * For jobs server UI
 * */
exports = module.exports = class AuthController {
    constructor(router) {
        router.get('/login', this.loginAuth);
        router.post('/login', passport.authenticate('local',{ failureRedirect: '/login', failureFlash: true }), this.loginPostAuth);
        router.get('/signup', this.signupAuth);
        router.post('/signup', this.signupPostAuth);
        router.get('/logout', this.logOut);
    }

    async loginAuth(req, res) {
        return res.render('login');
    }
    async signupAuth(req, res) {
        return res.render('signup');
    }
    async signupPostAuth(req, res) {
        AuthServices.signUp(req,res);
    };
    async loginPostAuth(req, res) {
        req.flash("success", `Welcome back ${req.user.username}`);
        return res.redirect('/');
    }
    async logOut(req, res) {
        AuthServices.login(req,res);
    }
}
