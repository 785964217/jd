var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs')
var app = express();
app.use(express.static('wwwroot'));
app.use(bodyParser.urlencoded({extended:true}))


// 取数据
app.get('/topImg',function(req,res){
    // 读数据，响应给前端
    fs.readFile('api/topImg.json',function(error,fileData){
        res.status(200).send(fileData);
    })
})

app.get('/province',function(req,res){
    // 读数据，响应给前端
    fs.readFile('api/province.json',function(error,fileData){
        res.status(200).send(fileData);
    })
})

app.get('/hotWords',function(req,res){
    // 读数据，响应给前端
    fs.readFile('api/hotwords.json',function(error,fileData){
        res.status(200).send(fileData);
    })
})


app.get('/industry',function(req,res){
    // 读数据，响应给前端
    fs.readFile('api/industry.json',function(error,fileData){
        res.status(200).send(fileData);
    })
})

app.get('/banner',function(req,res){
    // 读数据，响应给前端
    fs.readFile('api/banner.json',function(error,fileData){
        res.status(200).send(fileData);
    })
})
app.get('/miaosha',function(req,res){
    // 读数据，响应给前端
    fs.readFile('api/miaosha.json',function(error,fileData){
        res.status(200).send(fileData);
    })
})
app.get('/vogue',function(req,res){
    // 读数据，响应给前端
    fs.readFile('api/vogue.json',function(error,fileData){
        res.status(200).send(fileData);
    })
})
// supervisor app



app.listen(3000,function(){
    console.log('服务器已开~~~~~')
});
