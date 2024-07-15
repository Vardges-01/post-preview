"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const post_service_1 = require("./post.service");
const post_controller_1 = require("./post.controller");
const typeorm_1 = require("@nestjs/typeorm");
const post_entity_1 = require("./post.entity");
const image_service_1 = require("./image.service");
let PostModule = class PostModule {
};
exports.PostModule = PostModule;
exports.PostModule = PostModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([post_entity_1.PostsEntity])],
        providers: [post_service_1.PostService, image_service_1.ImageService],
        controllers: [post_controller_1.PostController],
    })
], PostModule);
//# sourceMappingURL=post.module.js.map