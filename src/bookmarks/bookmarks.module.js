"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BookmarksModule = void 0;
var common_1 = require("@nestjs/common");
var bookmarks_controller_1 = require("./bookmarks.controller");
var bookmarks_service_1 = require("./bookmarks.service");
var BookmarksModule = /** @class */ (function () {
    function BookmarksModule() {
    }
    BookmarksModule = __decorate([
        (0, common_1.Module)({
            controllers: [bookmarks_controller_1.BookmarksController],
            providers: [bookmarks_service_1.BookmarksService]
        })
    ], BookmarksModule);
    return BookmarksModule;
}());
exports.BookmarksModule = BookmarksModule;
