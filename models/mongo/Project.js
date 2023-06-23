const MongoDbModel = require('../../bootloader/mongo');

class Project extends MongoDbModel {

    static get connection() {
        return this.APP_DB;
    }
    
    static get Name() {
        return this.name;
    }

    static get Schema() {
        return mongoose => ({name: String, link: String, desc: String})
    }

    static get Indexes() {
        return [];
    }
}

exports = module.exports = Project;
