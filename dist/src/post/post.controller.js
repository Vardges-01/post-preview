"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const post_service_1 = require("./post.service");
const create_dto_1 = require("./dtos/create.dto");
const image_service_1 = require("./image.service");
const swagger_1 = require("@nestjs/swagger");
const post_dto_1 = require("./dtos/post.dto");
let PostController = class PostController {
    postService;
    imageService;
    constructor(postService, imageService) {
        this.postService = postService;
        this.imageService = imageService;
    }
    async getPosts() {
        return await this.postService.getAll();
    }
    async getPostPreview(id, res) {
        const previewImage = await this.imageService.generatePreviewImage(id);
        res.setHeader("Content-Type", "image/png");
        res.send(previewImage);
    }
    async createPost(createData, res) {
        try {
            const postResult = await this.postService.create(createData);
            const previewImage = await this.imageService.generatePreviewImage(postResult.id);
            res.setHeader("Content-Type", "image/png");
            res.send(previewImage);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.PostController = PostController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        type: [post_dto_1.PostDto],
        status: 200,
        description: "Retrieves a list of all posts.",
    }),
    (0, swagger_1.ApiOperation)({ summary: "Get a list of posts." }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], PostController.prototype, "getPosts", null);
tslib_1.__decorate([
    (0, common_1.Get)("preview"),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "The generated preview image for selected post",
        content: {
            "image/png": {
                schema: {
                    type: "string",
                    format: "binary",
                },
            },
        },
    }),
    (0, swagger_1.ApiOperation)({ summary: "Get Preview for Post by ID" }),
    tslib_1.__param(0, (0, common_1.Query)("id")),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostController.prototype, "getPostPreview", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: create_dto_1.CreatePostDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "The generated preview image for post",
        content: {
            "image/png": {
                schema: {
                    type: "string",
                    format: "binary",
                },
            },
        },
    }),
    (0, swagger_1.ApiOperation)({ summary: "Create Post" }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [create_dto_1.CreatePostDto, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostController.prototype, "createPost", null);
exports.PostController = PostController = tslib_1.__decorate([
    (0, common_1.Controller)("post"),
    (0, swagger_1.ApiTags)("Posts"),
    tslib_1.__metadata("design:paramtypes", [post_service_1.PostService,
        image_service_1.ImageService])
], PostController);
//# sourceMappingURL=post.controller.js.map