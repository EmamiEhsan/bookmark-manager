"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BookmarksService = void 0;
var common_1 = require("@nestjs/common");
var uuid_1 = require("uuid");
var BookmarksService = /** @class */ (function () {
    function BookmarksService() {
        this.bookmarks = [{
                id: (0, uuid_1.v4)(),
                url: 'https://google.com',
                description: 'bookmark number 1'
            }];
    }
    BookmarksService.prototype.findAll = function () {
        return this.bookmarks;
    };
    BookmarksService.prototype.creat = function (url, des) {
        var newBookmark = {
            id: (0, uuid_1.v4)(),
            url: url,
            description: des
        };
        this.bookmarks.push(newBookmark);
        return newBookmark;
    };
    BookmarksService = __decorate([
        (0, common_1.Injectable)()
    ], BookmarksService);
    return BookmarksService;
}());
exports.BookmarksService = BookmarksService;
