import { Injectable } from "@nestjs/common";
import { createCanvas } from "canvas";
import { PostService } from "./post.service";
import { generateAuthor, generateContent, generateFooter, generateTitle } from "./utils/canvas";

@Injectable()
export class ImageService {
  constructor(private readonly postService: PostService) { }

  async generatePreviewImage(id: number): Promise<Buffer> {
    try {
      const post = await this.postService.getOneById(id);

      const canvas = createCanvas(600, 300);
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = "#a3b18a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.textAlign = "center";
      ctx.fillStyle = "#ffffff";

      // Title
      generateTitle(ctx, post.title, canvas.width)

      // Content
      let contentWidth = generateContent(ctx, post.content, canvas.width)

      // Author
      generateAuthor(ctx, post.author, canvas.width, contentWidth)

      // Footer
      generateFooter(ctx)

      return canvas.toBuffer("image/png");
    } catch (err) {
      throw err;
    }
  }
}
