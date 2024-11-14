import { Task } from "../database/entities/Task";
import db from "../database";
import {
  TTaskCreatePayload,
  TTaskDeletePayload,
  TTaskUpdatedPayload,
} from "../types/task.types";

export class TaskServices {
  async getAll(): Promise<Task[]> {
    const tasks = await db.getRepository(Task).find();

    if (!tasks) {
      throw new Error("Tasks not found");
    }
    return tasks;
  }

  async createTask(payload: TTaskCreatePayload): Promise<Task> {
    const { title } = payload;

    const task = new Task();
    task.title = title;

    const createdTask = db.getRepository(Task).save(task);
    if (!createdTask) {
      throw new Error("Task not created");
    }

    return createdTask;
  }

  async updatedTask(payload: TTaskUpdatedPayload): Promise<Task> {
    const { id, title, completed } = payload;

    const task = await db.getRepository(Task).findOneBy({ id });

    if (!task) {
      throw new Error(`Task with id: ${id} not found`);
    }

    task.title = title ? title : task.title;
    task.completed = completed ? completed : task.completed;

    await db.getRepository(Task).save(task);
    return task;
  }

  async deleteTask(payload: TTaskDeletePayload): Promise<boolean> {
    const { id } = payload;

    const task = await db.getRepository(Task).findOneBy({ id });

    if (!task) {
      throw new Error(`Task with id: ${id} not found`);
    }

    await db.getRepository(Task).delete({ id: task.id });

    return true;
  }
}
