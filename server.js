'use strict';

const express = require('express');
const app = express();
const clips = require('./clips');
const port = process.env.PORT || 3000;

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

app.listen(port, function () {
    console.log(`App listening on port ${port}`);
  });

module.exports = app;