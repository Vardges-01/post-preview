"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const canvas_1 = require("canvas");
const post_service_1 = require("./post.service");
const canvas_2 = require("./utils/canvas");
let ImageService = class ImageService {
    postService;
    constructor(postService) {
        this.postService = postService;
    }
    async generatePreviewImage(id) {
        try {
            const post = await this.postService.getOneById(id);
            const canvas = (0, canvas_1.createCanvas)(600, 300);
            const ctx = canvas.getContext("2d");
            ctx.fillStyle = "#a3b18a";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.textAlign = "center";
            ctx.fillStyle = "#ffffff";
            (0, canvas_2.generateTitle)(ctx, post.title, canvas.width);
            let contentWidth = (0, canvas_2.generateContent)(ctx, post.content, canvas.width);
            (0, canvas_2.generateAuthor)(ctx, post.author, canvas.width, contentWidth);
            (0, canvas_2.generateFooter)(ctx);
            return canvas.toBuffer("image/png");
        }
        catch (err) {
            throw err;
        }
    }
};
exports.ImageService = ImageService;
exports.ImageService = ImageService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [post_service_1.PostService])
], ImageService);
//# sourceMappingURL=image.service.js.map