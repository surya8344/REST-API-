// var express = require('express');  
// var app = express();  
// var fs = require("fs");  
// var bodyParser = require('body-parser');  
// const PORT = 4000;
  

// app.use(function(req, res, next) {  
//   res.header("Access-Control-Allow-Origin", "*");  
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
//   res.header("Access-Control-Allow-Methods","POST, GET, PUT, DELETE, OPTIONS");  
//   next();  
// });  
  
// app.use(bodyParser.urlencoded({  
//     extended: true  
// }));  
  
// app.use(bodyParser.json());  
  

// app.get('/listUsers', function (req, res) {  
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {  
//        console.log( data );  
//        res.end( data );  
//    });  
// })  
  

// app.get('/:id', function (req, res) {  
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {  
//        users = JSON.parse( data );  
//        console.log(req.params.id);  
//        var user = users["user" + req.params.id]   
//        console.log( user );  
//        res.end( JSON.stringify(user));  
//    });  
// })  

// app.post('/addUser', function (req, res) {   
//        fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {  
//        var obj = JSON.parse('[' + data + ']' );  
//        obj.push(req.body);  
//        console.log(obj);  
//        res.end( JSON.stringify(obj)  );  
//    });  
// })  
  
// app.delete('/deleteUser/:id', function (req, res) {    
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {  
//        data = JSON.parse( data );  
//        delete data["user" + req.params.id];  
         
//        console.log( data );  
//        res.end( JSON.stringify(data));  
//    });  
// })  

// app.put('/updateUser/:id', function(req,res){   
//     fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) { 
//        data = JSON.parse( data );  
//        var arr={};  
//        arr=req.body;  
         
//         data["user" + req.params.id]= arr[Object.keys(arr)[0]] ; 
//         res.end( JSON.stringify( data ));  
         
//     });  
// } );  
  
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`)
//   })