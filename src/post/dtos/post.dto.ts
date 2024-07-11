import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsDate, IsString, IsUUID } from "class-validator";

export class PostDto {
  @ApiPropertyOptional()
  @IsUUID()
  id!: string;

  @ApiPropertyOptional()
  @IsString()
  title: string;

  @ApiPropertyOptional()
  @IsString()
  content: string;

  @ApiPropertyOptional()
  @IsString()
  author: string;

  @ApiPropertyOptional()
  @IsDate()
  createdAt!: Date;

  @ApiPropertyOptional()
  @IsDate()
  updatedAt!: Date;
}
