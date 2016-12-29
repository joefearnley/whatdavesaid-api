'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});

/**
 *  Get all clips.
 *
 * @type String (JSON? I'm building an API here, man)
 */
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        // return all the clips.....
        reply('Hello, world!');
    }
});

/**
 * Get a random clip.
 *
 * @type String (JSON? I'm building an API here, man)
 */
server.route({
    method: 'GET',
    path: '/random',
    handler: function (request, reply) {
        // read in a clips
        // spit out the data...
    }
});
