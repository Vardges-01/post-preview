import { Module } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostsEntity } from "./post.entity";
import { ImageService } from "./image.service";

@Module({
  imports: [TypeOrmModule.forFeature([PostsEntity])],
  providers: [PostService, ImageService],
  controllers: [PostController],
})
export class PostModule {}
