import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("task")
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  title!: string;

  @Column({ nullable: false, default: false })
  completed: boolean = false;
}
