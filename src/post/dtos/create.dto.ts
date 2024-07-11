import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
  @ApiProperty({ example: "We are Hiring" })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: "Intern/Junior Node.js Developer" })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ example: "HR Drone" })
  @IsString()
  @IsNotEmpty()
  author: string;
}
