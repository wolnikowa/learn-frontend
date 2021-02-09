var express = require('express');

var test = express();

test.use(express.static(__dirname));

test.use(express.static('learnFront'));

test.listen(3000);

