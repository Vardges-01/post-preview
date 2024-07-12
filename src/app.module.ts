import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostModule } from "./post/post.module";
import { AppDataSource } from "../ormconfig";

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options), PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
