//测试路由
const express = require('express');
const app = express();

app.get('/user',(req,res) => {
    res.status(200).json({
        name:'ykx',
        age:24
    })
});

module.exports = app;