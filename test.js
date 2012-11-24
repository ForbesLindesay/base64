var client = require('./build/build.js');
var server = require('./');
var assert = require('better-assert');

it('decode to the same data on client and server', function () {
  assert(client.decode('SGVsbG8gV29ybGQ=') === server.decode('SGVsbG8gV29ybGQ='));
});

it('encode to the same data on client and server', function () {
  assert(client.encode('Hello World!!!') === server.encode('Hello World!!!'));
});

it('can pass data from client to server', function () {
  assert(server.decode(client.encode('Hello World!!!')) === 'Hello World!!!');
});
it('can pass data from server to client', function () {
  assert(client.decode(server.encode('Hello World!!!')) === 'Hello World!!!');
});