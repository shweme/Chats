const express = require('express');  //used for routing
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const sockets = require('./socket.js');
const server = require('./listen.js');

//Define port used for the server
const PORT = 3000;

//Apply express middleware
app.use(cors());

//setup SOCKET
sockets.connect(io,PORT);

//Start server listening for requests
server.listen(http, PORT);

/*
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../src'));
    app.listen(3000,'127.0.0.1',function(){
        var d = new Date();
        var n = d.getHours();
        var m = d.getMinutes();
        console.log('Server has been started at : '+n+':'+m);
    })

//Route for default page (root of site)
app.get('/',function(req,res){
    res.sendFile(__dirname+"/../src/index.html");
});

//Route to check user credentials and report if valid
app.post('/api/login',function(req,res){
    if (!req.body) {
        return res.sendStatus(400)
    }
    var customer = {};
    customer.email = req.body.email;
    customer.upwd= req.body.upwd;
    if (req.body.email == "abc@com.au" && req.body.upwd == "123"){
        customer.valid = true;
    }else{
        customer.valid = false;
    }
    res.send(customer);
});
*/