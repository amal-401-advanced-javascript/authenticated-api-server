const timestamp = require('../lib/middleware/timestamp.js');
describe('logger Middleware', () => {
  const req = {};
  const res = {};
  const next = jest.fn();
  it('moves to the next middleware', () => {
    timestamp(req, res, next);
    expect(next).toHaveBeenCalledWith(); 
  });
});