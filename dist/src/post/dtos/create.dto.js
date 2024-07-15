"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePostDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreatePostDto {
    title;
    content;
    author;
}
exports.CreatePostDto = CreatePostDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: "We are Hiring" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreatePostDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: "Intern/Junior Node.js Developer" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(80, { message: 'Content must not exceed 80 characters.' }),
    tslib_1.__metadata("design:type", String)
], CreatePostDto.prototype, "content", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: "HR Drone" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreatePostDto.prototype, "author", void 0);
//# sourceMappingURL=create.dto.js.map