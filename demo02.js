function objType(obj){
    if(typeof obj === 'object'){
        return {}
    }else{
        return false
    }
};

module.exports = {
    objType
}