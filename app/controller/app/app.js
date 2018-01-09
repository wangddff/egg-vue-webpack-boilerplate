"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_1 = require("../../mocks/article/list");
const egg_1 = require("egg");
class AppController extends egg_1.Controller {
    async index() {
        await this.ctx.render('app/app.js', {
            url: this.ctx.url.replace(/\/app/, '')
        });
    }
    async list() {
        const pageIndex = this.ctx.query.pageIndex;
        const pageSize = this.ctx.query.pageSize;
        this.ctx.body = list_1.default.getPage(pageIndex, pageSize);
    }
    async detail() {
        const id = this.ctx.query.id;
        this.ctx.body = list_1.default.getDetail(id);
    }
}
exports.default = AppController;
