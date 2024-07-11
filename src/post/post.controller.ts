import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
  Res,
} from "@nestjs/common";
import { PostService } from "./post.service";
import { Response } from "express";
import { CreatePostDto } from "./dtos/create.dto";
import { ImageService } from "./image.service";
import { ApiTags, ApiBody, ApiResponse, ApiOperation } from "@nestjs/swagger";
import { PostDto } from "./dtos/post.dto";

@Controller("post")
@ApiTags("Posts")
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly imageService: ImageService,
  ) {}

  @Get()
  @ApiResponse({
    type: [PostDto],
    status: 200,
    description: "Retrieves a list of all posts.",
  })
  @ApiOperation({ summary: "Get a list of posts." })
  async getPosts() {
    return await this.postService.getPosts();
  }

  @Get("preview")
  @ApiResponse({
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
  })
  @ApiOperation({ summary: "Get Preview for Post by ID" })
  async getPostPreview(@Query("id") id: number, @Res() res: Response) {
    const previewImage = await this.imageService.generatePreviewImage(id);
    res.setHeader("Content-Type", "image/png");
    res.send(previewImage);
  }

  @Post()
  @ApiBody({ type: CreatePostDto })
  @ApiResponse({
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
  })
  @ApiOperation({ summary: "Create Post" })
  async createPost(@Body() createData: CreatePostDto, @Res() res: Response) {
    try {
      const postResult = await this.postService.createPost(createData);

      const previewImage = await this.imageService.generatePreviewImage(
        postResult.id,
      );

      res.setHeader("Content-Type", "image/png");
      res.send(previewImage);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
