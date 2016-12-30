'use strict';

const baseUrl = 'http://localhost:8080';
const nock = require('nock');
const request = require('supertest')(baseUrl);
const expect = require('chai').expect;

let fakeResponse = {};

describe('GET /', function() {
    beforeEach(function() {
        fakeResponse = {
            clips: [
                {
                    fileName: 'black-metal.mp3',
                    title: "Black Metal",
                    path:`${baseUrl}/clips/black-metal.mp3`
                },{
                    fileName: 'hot-damn.mp3',
                    title: "Hot Damn",
                    path:`${baseUrl}/clips/hot-damn.mp3`
                },{
                    fileName: 'pansy-immune-system.mp3',
                    title: "Pansy Immune System",
                    path:`${baseUrl}/clips/pansy-immune-system.mp3`
                }
            ]
        };

        nock(baseUrl).get('/').reply(200, fakeResponse);
    });

    it('returns a successful response', function(done) {
        request.get('/').end(function (error, response) {
            expect(response.status).to.equal(200);
            expect(response.type).to.equal('application/json');
            done();
        });
    });

    it('returns clips', function(done) {
        request.get('/').end(function (error, response) {
            expect(response.body.clips.length).to.equal(3);
            done();
        });
    });
            
    it('returns correct clips', function(done) {
        request.get('/').end(function (error, response) {
            expect(response.body.clips[0].title).to.equal('Black Metal');
            expect(response.body.clips[1].title).to.equal('Hot Damn');
            expect(response.body.clips[2].title).to.equal('Pansy Immune System');
            done();
        });
    });
});

describe('GET /random' , function() {
    beforeEach(function() {
        fakeResponse = {
            fileName: 'pansy-immune-system.mp3',
            title: "Pansy Immune System",
            path:`${baseUrl}/clips/pansy-immune-system.mp3`
        };

        nock(baseUrl).get('/random').reply(200, fakeResponse);
    });

    it('returns a successful response', function(done) {
        request.get('/random').end(function (error, response) {
            expect(response.status).to.equal(200);
            expect(response.type).to.equal('application/json');
            done();
        });
    });

    it('returns the correct clip', function(done) {
        request.get('/random').end(function (error, response) {
            expect(response.body.fileName).to.equal('pansy-immune-system.mp3');
            expect(response.body.title).to.equal('Pansy Immune System');
            expect(response.body.path).to.equal(`${baseUrl}/clips/pansy-immune-system.mp3`);
            done();
        });
    });
});