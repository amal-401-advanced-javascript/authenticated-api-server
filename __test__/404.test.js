const {server} = require('../lib/server.js');
const supertest = require('supertest');
const mochServer = supertest(server);

describe('404 middleware module',()=>{
  it('it should response with status 404',()=>{
    return mochServer.get('/hello').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
  it('it should response with status 404',()=>{
    return mochServer.delete('/hello/5').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
  it('it should response with status 404',()=>{
    return mochServer.put('/hello/5').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
  it('it should response with status 404',()=>{
    return mochServer.post('/hello').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
});