class ProductValidation{

    static validateName(name){
        return (/^[a-zA-Z]+$/.test(name))
    }

    static validateUrl(Url){
        return /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(Url);  
    }
}

exports = module.exports = ProductValidation;