"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const post_entity_1 = require("./post.entity");
const typeorm_2 = require("@nestjs/typeorm");
const post_not_found_exception_1 = require("../exteptions/post-not-found.exception");
let PostService = class PostService {
    postRepository;
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async create(data) {
        const post = this.postRepository.create(data);
        return this.postRepository.save(post);
    }
    async getAll() {
        return this.postRepository.find();
    }
    async getOneById(id) {
        const post = await this.postRepository.findOneBy({ id });
        if (!post) {
            throw new post_not_found_exception_1.PostNotFoundException(`Post with id ${id} not found`);
        }
        return post;
    }
};
exports.PostService = PostService;
exports.PostService = PostService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_2.InjectRepository)(post_entity_1.PostsEntity)),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository])
], PostService);
//# sourceMappingURL=post.service.js.map