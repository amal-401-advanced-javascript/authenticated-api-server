'use strict';
require('@code-fellows/supergoose');
const products = require('../lib/models/products/products-model.js');
const obj1 = {
  'category': 'fruits',
  'name': 'lemon',
  'display_name': 'lemon',
  'description': 'lemon'};
const obj2 = {
  'category': 'fruits',
  'name': 'lemon',
  'display_name': 'lemon',
  'description': 'lemon'};
describe('products Model', () => {
  it('createPrroducts', () => {
    return products.create(obj1).then((result) => {
      Object.keys(obj1).forEach((key) => {
        expect(result[key]).toEqual(obj1[key]);
      });
    });
  });
  it('getPrroducts', () => {
    return products.get().then((result) => {
      Object.keys(obj1).forEach((key) => {
        expect(result[0][key]).toEqual(obj1[key]);
      });
    });
  });
  it('putPrroducts', () => {
    return products.get().then((result) => {
      const id = result[0]._id;
      return products.update(id,obj2).then((result) => {
        Object.keys(obj2).forEach((key) => {
          expect(result[key]).toEqual(obj2[key]);
        });
      });
    });

  });
  it('putPrroducts', () => {
    return products.get().then((result) => {
      const id = result[0]._id;
      return products.delete(id).then((result) => {
        return products.get().then((result2) => {
          expect(result2).toEqual([]);
        });
      });
    });
  });
});