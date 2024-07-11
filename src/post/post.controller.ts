import { Body, Controller, Get, HttpException, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { PostService } from './post.service';
import { Response } from 'express';
import { CreatePostDto } from './dtos/create.dto';
import { ImageService } from './image.service';

@Controller('post')
export class PostController {
    constructor(
        private readonly postService: PostService,
        private readonly imageService: ImageService) { }

    @Get()
    async getPosts() {
        return await this.postService.getPosts()
    }

    @Get('preview')
    async getPostPreview(@Query('id') id: number, @Res() res: Response,
    ) {
        const previewImage = await this.imageService.generatePreviewImage(id)
        res.setHeader('Content-Type', 'image/png');
        res.send(previewImage);
    }

    @Post()
    async createPost(
        @Body() createData: CreatePostDto,
        @Res() res: Response,
    ) {
        try {
            const postResult = await this.postService.createPost(createData);

            const previewImage = await this.imageService.generatePreviewImage(postResult.id)

            res.setHeader('Content-Type', 'image/png');
            res.send(previewImage);

        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}
