const { appendFile } = require('fs');
const rootRouter = require('./router');

appendFile.use('/', rootRouter);