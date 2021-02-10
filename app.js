const express = require('express');
const port=3000;
const host='localhost';
const app = express();

app.use('/', express.static('mojaStrona-express'));
app.use('/*',(reg,res) =>  res.sendrile(path.resolve('mojastrona-express/index.html')));

app.listen(port,host, ()=>{
    console.log('Your page is great and it uses:', port, host)
});

