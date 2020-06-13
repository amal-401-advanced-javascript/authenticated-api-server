'use strict';
require('@code-fellows/supergoose');
const categories = require('../lib/models/categories/categories-model.js');
const obj1 = {
  'name': 'fruits',
  'display_name': 'fruits',
  'description': 'fruits'};
const obj2 = {
  'name': 'vegetablese',
  'display_name': 'vegetables',
  'description': 'vegetables'};
describe('categories Model', () => {
  it('createCategories', () => {
    return categories.create(obj1).then((result) => {
      Object.keys(obj1).forEach((key) => {
        expect(result[key]).toEqual(obj1[key]);
      });
    });
  });
  it('getCategories', () => {
    return categories.get().then((result) => {
      Object.keys(obj1).forEach((key) => {
        expect(result[0][key]).toEqual(obj1[key]);
      });
    });
  });
  it('putCategories', () => {
    return categories.get().then((result) => {
      const id = result[0]._id;
      return categories.update(id,obj2).then((result) => {
        Object.keys(obj2).forEach((key) => {
          expect(result[key]).toEqual(obj2[key]);
        });
      });
    });

  });
  it('putCategories', () => {
    return categories.get().then((result) => {
      const id = result[0]._id;
      return categories.delete(id).then((result) => {
        return categories.get().then((result2) => {
          expect(result2).toEqual([]);
        });
      });
    });
  });
}); 