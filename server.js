'use strict';

const express = require('express');
const app = express();
const url = 'http://herokuapp.com/whatdavesaid-api';

const clips = [
    {
        fileName: 'black-metal.mp3',
        title: "Black Metal",
        path:`${url}/clips/black-metal.mp3`
    },{
        fileName: 'hot-damn.mp3',
        title: "Hot Damn",
        path:`${url}/clips/hot-damn.mp3`
    },{
        fileName: 'pansy-immune-system.mp3',
        title: "Pansy Immune System",
        path:`${url}/clips/pansy-immune-system.mp3`
    }
];

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send({
        clips: clips 
    });
});

app.get('/random', function (req, res) {
    let min = Math.ceil(0);
    let max = Math.floor(3);
    let number = Math.floor(Math.random() * (max - min)) + min;

    res.send(clips[number]);
});

app.listen(process.env.PORT, function () {
    console.log('App listening on port ' + process.env.PORT)
});

module.exports = app;