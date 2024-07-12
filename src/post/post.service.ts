import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dtos/create.dto";
import { Repository } from "typeorm";
import { PostsEntity } from "./post.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { PostNotFoundException } from "exteptions/post-not-found.exception";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostsEntity)
    private postRepository: Repository<PostsEntity>,
  ) {}

  async create(data: CreatePostDto) {
    const post = this.postRepository.create(data);
    return this.postRepository.save(post);
  }

  async getAll(): Promise<PostsEntity[]> {
    return this.postRepository.find();
  }

  async getOneById(id: number): Promise<PostsEntity> {
    const post = await this.postRepository.findOneBy({ id });
    if (!post) {
      throw new PostNotFoundException(`Post with id ${id} not found`);
    }
    return post;
  }
}
