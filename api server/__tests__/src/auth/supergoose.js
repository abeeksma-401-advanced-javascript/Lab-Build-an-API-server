'use strict';

const { server } = require('../../../src/app');
const supergoose = require('../../supergoose');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

const mockRequest = supergoose.server(server)

const Roles = require('../../../src/auth/roles-model');
const Users = require('../../../src/auth/users-model');


describe('api route auth', () => {
  it('recieves a 401 if not authenticated', () => {
    return mockRequest
    .get('/products')
    .expect(401);
  });
}); 

