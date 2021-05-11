const express = require('express');
const app = express();
const logger = require('./utils/logging').logger;

app.get('/', (req, res) => {
    logger.info('Reqest received from: ' + req.ip);
    res.status(200).json({
        info: 'Hello world from AppEngine!',
        version: '1.0.0'
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    logger.info('AppEngineTest running on port ' + port);
});
