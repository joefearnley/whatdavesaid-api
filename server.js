'use strict';

const express = require('express');
const app = express();
const clips = require('./clips');

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send({
        clips: clips 
    });
});

app.get('/random', function (req, res) {
    let min = Math.ceil(0);
    let max = Math.floor(13);
    let number = Math.floor(Math.random() * (max - min)) + min;

    res.setHeader('Content-Type', 'application/json');
    res.send(clips[number]);
});

app.listen(process.env.PORT, function () {
    console.log('App listening on port ' + process.env.PORT)
});

module.exports = app;