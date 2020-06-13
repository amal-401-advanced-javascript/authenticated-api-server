const cors = require('cors');

const express = require('express');
const router = require('./routes/router.js');
const morgan = require('morgan');
const notFoundHandler = require('../lib/middleware/404.js');
const errorHandler = require('../lib/middleware/500.js');
const app = express();
// app.use('/docs', express.static('./docs'));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api/v1', router);
app.use('*', notFoundHandler);
app.use(errorHandler);
module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`),
    );
  },
};