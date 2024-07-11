import { Injectable } from "@nestjs/common";
import { ImageService } from "./image.service";
import { CreatePostDto } from "./dtos/create.dto";
import { Repository } from "typeorm";
import { PostsEntity } from "./post.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostsEntity)
    private postRepository: Repository<PostsEntity>,
  ) {}

  async createPost(data: CreatePostDto) {
    const post = this.postRepository.create(data);
    return this.postRepository.save(post);
  }

  async getPosts(): Promise<PostsEntity[]> {
    return this.postRepository.find();
  }

  async getPostById(id: number): Promise<PostsEntity> {
    return this.postRepository.findOneBy({ id });
  }
}
