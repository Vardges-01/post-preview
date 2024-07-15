import { IsNotEmpty, IsString, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
  @ApiProperty({ example: "We are Hiring" })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: "Intern/Junior Node.js Developer" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(80,{message:'Content must not exceed 80 characters.'})
  content: string;

  @ApiProperty({ example: "HR Drone" })
  @IsString()
  @IsNotEmpty()
  author: string;
}
