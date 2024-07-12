import { Injectable } from "@nestjs/common";
import { createCanvas } from "canvas";
import { PostService } from "./post.service";

@Injectable()
export class ImageService {
  constructor(private readonly postService: PostService) {}

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
      ctx.font = "30px Arial";
      ctx.fillText(post.title, canvas.width / 2, 100);

      // Content
      ctx.font = "bold 28px Arial";
      ctx.fillText(post.content, canvas.width / 2, 150);

      // Author
      ctx.font = "16px Arial";
      ctx.fillText(post.author, canvas.width / 2, 200);

      // Footer
      ctx.font = "16px Arial";
      ctx.textAlign = "start";
      ctx.fillStyle = "rgba(0, 0, 0, 0.40)";
      ctx.fillRect(
        0,
        270,
        ctx.measureText("Powered by HR DRONE").width + 20,
        30,
      );
      ctx.fillStyle = "#ffffff";
      ctx.fillText("Powered by HR DRONE", 10, 290);

      return canvas.toBuffer("image/png");
    } catch (err) {
      throw err;
    }
  }
}
