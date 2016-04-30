const Koa = require('koa');
const Router = require('koa-router');
const config = require('../config');

const app = new Koa();
const appRouter = new Router();
const parksRouter = require('./api/parks');

const { username, password, host, port, name } = config.get('db');

const mongoose = require('mongoose');
mongoose.connect(`mongodb://${username}:${password}@${host}:${port}/${name}`);

const db = mongoose.connection;

db.on('error', function(err) {
  console.log('mongoose error', err);
});

db.once('open', function(callback) {
  console.log('mongoose connected');
});

appRouter
  .get('/', (ctx, next) => {
    ctx.body = 'test';
  });

app.use(appRouter.routes());
app.use(parksRouter.routes());
app.use(appRouter.allowedMethods());

app.listen(process.env.PORT || config.get('app:port'), () => console.log(`server started on port ${config.get('app:port')}`));
