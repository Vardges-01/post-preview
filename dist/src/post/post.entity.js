"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsEntity = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let PostsEntity = class PostsEntity {
    id;
    title;
    content;
    author;
    createdAt;
    updatedAt;
};
exports.PostsEntity = PostsEntity;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], PostsEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    tslib_1.__metadata("design:type", String)
], PostsEntity.prototype, "title", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 80 }),
    tslib_1.__metadata("design:type", String)
], PostsEntity.prototype, "content", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    tslib_1.__metadata("design:type", String)
], PostsEntity.prototype, "author", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: "timestamp",
    }),
    tslib_1.__metadata("design:type", Date)
], PostsEntity.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: "timestamp",
    }),
    tslib_1.__metadata("design:type", Date)
], PostsEntity.prototype, "updatedAt", void 0);
exports.PostsEntity = PostsEntity = tslib_1.__decorate([
    (0, typeorm_1.Entity)({ name: "posts" })
], PostsEntity);
//# sourceMappingURL=post.entity.js.map