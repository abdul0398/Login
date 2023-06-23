


class ProjectService {
    static async find(){
        return await this.model.find();
    }

    static async create(obj){
        await this.model.create(obj);
    }
    
    static async delete(id){
        await this.model.findByIdAndDelete(id);
    }
}

exports = module.exports = ProjectService;