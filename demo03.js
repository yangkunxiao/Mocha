
//异步测试
function asyncFn(callback){
    setTimeout(() => {
        console.log('async');
        callback && callback()
    },1000)
};
module.exports = {
    asyncFn
}