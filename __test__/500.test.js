const {server} = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mochServer = supergoose(server);
describe('500 middleware module',()=>{
  it('it should response with status 500',()=>{
    return mochServer.post('/api/v1/categories')
      .send({})
      .then((result)=>{
        expect(result.status).toBe(500);
      }).catch(e=>{});
  });
});