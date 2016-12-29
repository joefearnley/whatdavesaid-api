const request = require('request')
const nock = require('nock');
const baseUrl = 'http://localhost:5000/';
const fakeResponse = [{
    'name': 'black-metal',
    'title': 'Black Metal',
    'url': 'black-metal.mp3'
},{
    'name': 'hot-damn',
    'title': 'Hot Damn',
    'url': 'hot-damn.mp3'
}];

describe('Clips', function() {

    describe('GET /', function() {
        nock(baseUrl).get('/').reply(200, fakeResponse);

        it('should list all clips', function() {
            request.get(url, function(error, response, body) {
                expect(response).toBeDefined();

                
            });
        });
    });

    describe('GET /random', function() {
        nock(baseUrl).get('/').reply(200, fakeResponse);

        it('should list a random clip', function() {
            request.get(url, function(error, response, body) {
                expect(response).toBeDefined();
            });
        });
    });
});
