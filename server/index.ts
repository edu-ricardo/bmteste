/// <reference path="typings/index.d.ts" />
import * as express from 'express';
import * as bp from 'body-parser';
import DataAccess = require('./db/dataAccess');

const app = express(); 
const port = process.env.PORT || 8080;

app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

app.use('/', express.static(__dirname + '/../../www'));

app.listen(port, () => {
    console.log('App listen on port: ' + port);
});