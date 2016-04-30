const Router = require('koa-router');
const Park = require('../../models/parks');

const parksRouter = new Router();

parksRouter
  .get('/parks', async (ctx, next) => {
    const result = await Park.find().slice('medias', 1).limit(100).exec();
    ctx.body = result;
  });

module.exports = parksRouter;
