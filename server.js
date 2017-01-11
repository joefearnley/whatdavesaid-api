'use strict';

const express = require('express');
const app = express();
const url = 'http://herokuapp.com/whatdavesaid-api';

const clips = [
    {
        fileName: 'wheres-the-buffet.mp3',
        title: "Where's the Buffet?",
        path:`${url}/clips/wheres-the-buffet.mp3`
    },{
        fileName: 'hot-damn.mp3',
        title: "Hot Damn",
        path:`${url}/clips/hot-damn.mp3`
    },{
        fileName: 'pansy-immune-system.mp3',
        title: "Pansy Immune System",
        path:`${url}/clips/pansy-immune-system.mp3`
    },{
        fileName: 'upper-football.mp3',
        title: "Upper Football",
        path:`${url}/clips/upper-football.mp3`
    },{
        fileName: 'william-butterfield.mp3',
        title: "William Butterfield",
        path:`${url}/clips/william-butterfield.mp3`
    },{
        fileName: 'smooth-as-silk.mp3',
        title: "Smooth as Silk",
        path:`${url}/clips/smooth-as-silk.mp3`
    },{
        fileName: 'black-metal.mp3',
        title: "Black Metal",
        path:`${url}/clips/black-metal.mp3`
    },{
        fileName: 'large-can-of-beer.mp3',
        title: "Large Can of Beer",
        path:`${url}/clips/large-can-of-beer.mp3`
    },{
        fileName: 'bought-a-new-part.mp3',
        title: "Bought a New Part",
        path:`${url}/clips/bought-a-new-part.mp3`
    },{
        fileName: 'who-is-this.mp3',
        title: "Who is this?",
        path:`${url}/clips/who-is-this.mp3`
    },{
        fileName: 'futons-instead-of-pews.mp3',
        title: "Futons Instead of Pews",
        path:`${url}/clips/futons-instead-of-pews.mp3`
    },{
        fileName: 'challenge-to-a-dual.mp3',
        title: "Challenge to a Dual",
        path:`${url}/clips/challenge-to-a-dual.mp3`
    },{
        fileName: 'hahahaha.mp3',
        title: "Hahahaha",
        path:`${url}/clips/hahahaha.mp3`
    },{
        fileName: 'where-you-going.mp3',
        title: "Where You Going?",
        path:`${url}/clips/where-you-going.mp3`
    },{
        fileName: 'clamy-feeling.mp3',
        title: "Clamy Feeling",
        path:`${url}/clips/clamy-feeling.mp3`
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
    let max = Math.floor(13);
    let number = Math.floor(Math.random() * (max - min)) + min;

    res.setHeader('Content-Type', 'application/json');
    res.send(clips[number]);
});

app.listen(process.env.PORT, function () {
  console.log('App listening on port ' + process.env.PORT)
});

module.exports = app;