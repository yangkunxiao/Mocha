function add(...rest){
    return rest.reduce((a,b) => {
        return a + b
    })
}

module.exports = {
    add
}