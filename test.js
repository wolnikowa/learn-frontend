const express = require('express');
const port=3000;
const host='localhost';
const app = express();

app.use('/', express.static('test'));
app.use('/*',(reg,res) =>  res.sendrile(path.resolve('test/index.html')));

app.listen(port,host, ()=>{
    console.log('START', port, host)
});

