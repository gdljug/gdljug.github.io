const express = require('express');
const app = express();

app.use(express.static('./'));

/*
app.get('/', (req, res, next) => {
    express.static('./')(req, res, next);
});*/

app.listen(3000);