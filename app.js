const express = require('express');

const app = express();

const port = 3000


app.use('/', function(req, res, next) {
    console.log('middleware1')
    next()
})

function logMessage(req, res, next) {
    console.log('middleware2');
    next();
}

app.get('/', logMessage, (req, res) => res.send('root dev fix'))
app.get('/hello', (req, res) => {
    console.log('request comming in');
    res.send('world');
})

app.listen(port, ()=> {console.log('application started at 3000...')} );