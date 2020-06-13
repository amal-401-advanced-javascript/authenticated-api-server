function logger (req,res,next){
  console.log(`Request => Request method: ${req.method} Request path:  ${req.path} requestTime: ${req.requestTime}`);
  next();
}
module.exports = logger;