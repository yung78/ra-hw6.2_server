const http = require('http');
const Koa = require('koa');
const koaBody = require('koa-body').default;
const cors = require('@koa/cors');
const Router = require('koa-router');
const data = require('./db/db');
const customId = require('custom-id');

const app = new Koa();
const router = new Router();

app.use(koaBody({
  urlencoded: true,
  multipart: true,
}));

app.use(cors());

router.get('/notes', async (ctx) => {
  ctx.response.body = {
    status: 'ok',
    notes: data.notes,
  };

});

router.post('/notes', async (ctx) => {
  data.addNote({
    id: customId({ lowerCase: true }),
    content: ctx.request.body,
  })
  console.log(data.notes);

  ctx.response.body = {
    status: 'ok',
    notes: data.notes,
  };

  console.log(ctx.response.body)


});

router.del('/notes/:id', async (ctx) => {
  const id = ctx.request.url.replace('/notes/','');
  data.deleteNote(id);

  console.log(data.notes)

  ctx.response.body = {
    status: 'ok',
    notes: data.notes,
  };
});

app.use(router.routes()).use(router.allowedMethods());

const port = 7070;
const server = http.createServer(app.callback());

server.listen(port, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('WORK');
});
