import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'posts'})
export class PostsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  author: string;
}