const express = require('express');
const app =express();
const port = process.env.PORT || 3001;
const cors = require('cors');
const upload = require("express-fileupload");
const path = require('path');

app.use(cors())
app.use(upload());
app.use(express.static(path.resolve(__dirname+'/build')));

app.get('/',(req,res)=>{
	res.sendFile(__dirname+"/home.html");
});

app.get('*',(req,res)=>{
	res.sendFile(path.resolve(__dirname+'/build/index.html'));
});

app.post('/api',(req,res)=>{
	res.send(JSON.stringify([{name:'Tarek',roll:293},{name:'Ahmed',roll:243}]));
});

app.post('/post',(req,res)=>{
	res.send(req.body.assname);
});

app.listen(port,()=>{
	console.log('port run @ ',port);
});