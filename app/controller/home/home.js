"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_1 = require("../../mocks/article/list");
const egg_1 = require("egg");
class HomeController extends egg_1.Controller {
    async index() {
        const { ctx } = this;
        await ctx.render('home/index.js', list_1.default.getPage(1, 10));
    }
    async client() {
        const { ctx } = this;
        await ctx.renderClient('home/index.js', list_1.default.getPage(1, 10));
    }
    async pager() {
        const { ctx } = this;
        const pageIndex = ctx.query.pageIndex;
        const pageSize = ctx.query.pageSize;
        ctx.body = list_1.default.getPage(pageIndex, pageSize);
    }
}
exports.default = HomeController;
;
