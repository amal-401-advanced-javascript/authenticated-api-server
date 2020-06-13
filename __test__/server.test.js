const {server} = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mochServer = supergoose(server);

describe('products routs',()=>{
  it('it should post a new record',()=>{
    const obj = {
      'category': 'fruits',
      'name': 'apple',
      'display_name': 'apple',
      'description': 'apple'};
    return mochServer.post('/api/v1/products')
      .send(obj)
      .then((result)=>{
        const record = result.body;
        Object.keys(obj).forEach(key=>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('it should get a new record',()=>{
    const obj = {
      'category': 'fruits',
      'name': 'banana',
      'display_name': 'banana',
      'description': 'yellow fruits'};
    return mochServer.post('/api/v1/products')
      .send(obj)
      .then((result)=>{
        return mochServer.get('/api/v1/products')
          .then((item)=>{
            Object.keys(obj).forEach(key=>{
              expect(item.body.result[1][key]).toEqual(obj[key]);
            });
          });
          
      });
  });
  
  it('it should get a record by id',()=>{
    const obj = {
      'category': 'fruits',
      'name': 'orange',
      'display_name': 'orange',
      'description': 'orange'};
    return mochServer.post('/api/v1/products')
      .send(obj)
      .then((result)=>{
        const id = result.body._id;
        return mochServer.get(`/api/v1/products/${id}`)
          .then((item)=>{
            Object.keys(obj).forEach(key=>{
              expect(item.body[0][key]).toEqual(obj[key]);
            });
          });
          
      });
  });

  it('it should update a record by id',()=>{
    const obj = {
      'category': 'fruits',
      'name': 'watermelon',
      'display_name': 'watermelon',
      'description': 'watermelon'};
    const obj2 = {
      'category': 'fruits',
      'name': 'watermelon fruits',
      'display_name': 'watermelon fruits',
      'description': 'watermelon fruits'};
    return mochServer.post('/api/v1/products')
      .send(obj)
      .then((result)=>{
        const id = result.body._id;
        return mochServer.put(`/api/v1/products/${id}`)
          .send(obj2)
          .then((item)=>{
            Object.keys(obj2).forEach(key=>{
              expect(item.body[key]).toEqual(obj2[key]);
            });
          });
          
      });
  });

  it('it should delete a record by id',()=>{
    const obj = {
      'category': 'fruits',
      'name': 'strawberry',
      'display_name': 'strawberry',
      'description': 'strawberry'};
    return mochServer.post('/api/v1/products')
      .send(obj)
      .then((result)=>{
        const id = result.body._id;
        return mochServer.delete(`/api/v1/products/${id}`)
          .then((item)=>{
            Object.keys(obj).forEach(key=>{
              expect(item.body).toEqual({});
            });
          });
          
      });
  });
});

describe('categories routs',()=>{
  it('it should post a new record',()=>{
    const obj = {
      'name': 'fruits',
      'display_name': 'fruits',
      'description': 'fruits'};
    return mochServer.post('/api/v1/categories')
      .send(obj)
      .then((result)=>{
        const record = result.body;
        Object.keys(obj).forEach(key=>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('it should get a new record',()=>{
    const obj = {
      'name': 'blueberry',
      'display_name': 'blueberry',
      'description': 'blue fruits'};
    return mochServer.post('/api/v1/categories')
      .send(obj)
      .then((result)=>{
        return mochServer.get('/api/v1/categories')
          .then((item)=>{
            Object.keys(obj).forEach(key=>{
              expect(item.body.result[1][key]).toEqual(obj[key]);
            });
          });
          
      });
  });
  
  it('it should get a record by id',()=>{
    const obj = {
      'name': 'mango',
      'display_name': 'mango',
      'description': 'mango'};
    return mochServer.post('/api/v1/categories')
      .send(obj)
      .then((result)=>{
        const id = result.body._id;
        return mochServer.get(`/api/v1/categories/${id}`)
          .then((item)=>{
            Object.keys(obj).forEach(key=>{
              expect(item.body[0][key]).toEqual(obj[key]);
            });
          });
          
      });
  });

  it('it should update a record by id',()=>{
    const obj = {
      'name': 'pienapple',
      'display_name': 'pienapple',
      'description': 'pienapple'};
    const obj2 = {
      'name': 'pienapple fruits',
      'display_name': 'pienapple fruits',
      'description': 'pienapple fruits'};
    return mochServer.post('/api/v1/categories')
      .send(obj)
      .then((result)=>{
        const id = result.body._id;
        return mochServer.put(`/api/v1/categories/${id}`)
          .send(obj2)
          .then((item)=>{
            Object.keys(obj2).forEach(key=>{
              expect(item.body[key]).toEqual(obj2[key]);
            });
          });
          
      });
  });

  it('it should delete a record by id',()=>{
    const obj = {
      'name': 'kiwi',
      'display_name': 'kiwi',
      'description': 'kiwi'};
    return mochServer.post('/api/v1/categories')
      .send(obj)
      .then((result)=>{
        const id = result.body._id;
        return mochServer.delete(`/api/v1/categories/${id}`)
          .then((item)=>{
            Object.keys(obj).forEach(key=>{
              expect(item.body).toEqual({});
            });
          });
          
      });
  });
});