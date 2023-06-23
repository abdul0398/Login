const ProjectService = require("../services/ProjectService");

// middleware to check if user is login
const LoginValidation = require("../validations/LoginValidation");
/**
 * For jobs server UI
 * */
exports = module.exports = class IndexController {
    constructor(router) {
        ProjectService.model = _db.Project;
        // config routes
        router.get('/', this.indexPage);
        router.get('/insert',LoginValidation.Loginvalidate, this.projectAdd);
        router.get('/delete/:id',LoginValidation.Loginvalidate, this.projectDelete);
        router.post('/insert',LoginValidation.Loginvalidate, this.projectAddPost);
        router.get('/project/:id',LoginValidation.Loginvalidate, this.projectEditGet);
        router.post('/project/:id',LoginValidation.Loginvalidate, this.projectEditPost);
        router.post('/color', this.colorPost);
        router.get('/getColor', this.getColor);
        log.info('Routed', this.constructor.name);
    }

    async indexPage(req, res) {
        const projects = await ProjectService.find(); 
        return res.render('index', {projects: projects});
    }
    async projectAdd(req, res) {
        return res.render('addProject', {msg: ""});
    }
    async projectAddPost(req, res) {
        const details = req.body;
        await ProjectService.create(details);
        return res.redirect('/');
    }
    async projectDelete(req, res) {
        const id = req.params.id;
        await ProjectService.delete(id);
        return res.redirect('/');
    }
    async projectEditGet(req, res) {
        const id = req.params.id;
        const project = await _db.Project.findById(id);
        res.render("edit", {project});
    }
    async projectEditPost(req, res) {
        const id = req.params.id;
        const details = req.body;
        const project = await _db.Project.findByIdAndUpdate(id,details);
        res.redirect('/');
    }
    async colorPost(req, res) {
        const color = req.body;
        await _db.Color.findOneAndUpdate({}, color, { upsert: true });
        return res.redirect('/');
    }
    async getColor(req, res) {
        const color = await _db.Color.find();
        res.json(color[0].color);
    }

};
