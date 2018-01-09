
import { Application } from 'egg';

/**
 * @param {Egg.Application} app - egg application
 */
export default (app: Application) => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/client', controller.home.client);
  router.get('/about', controller.about.index);
  router.get('/app/api/article/list', controller.app.list);
  router.get('/app/api/article/:id', controller.app.detail);
  router.get('/app(/.+)?', controller.app.index);
};