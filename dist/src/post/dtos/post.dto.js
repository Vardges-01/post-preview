"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostDto = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class PostDto {
    id;
    title;
    content;
    author;
    createdAt;
    updatedAt;
}
exports.PostDto = PostDto;
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], PostDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], PostDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], PostDto.prototype, "content", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], PostDto.prototype, "author", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsDate)(),
    tslib_1.__metadata("design:type", Date)
], PostDto.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsDate)(),
    tslib_1.__metadata("design:type", Date)
], PostDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=post.dto.js.map