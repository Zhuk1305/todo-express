import { TaskDTO } from "../dtos/taskDTO";
import { ITask } from "../interfaces/task.interface";
import { TaskServices } from "../services/task.services";
import {
  TTaskCreatePayload,
  TTaskDeletePayload,
  TTaskUpdatedPayload,
} from "../types/task.types";

let todos: TaskDTO[] = [
  {
    id: "1628003768123",
    title: "Learn Express.js",
    completed: false,
  },
];

export class TodoController {
  private taskServices = new TaskServices();

  async getAll() {
    return this.taskServices.getAll();
  }

  createTodo(payload: TTaskCreatePayload) {
    return this.taskServices.createTask(payload);
  }

  updateTodo(payload: TTaskUpdatedPayload) {
    return this.taskServices.updatedTask(payload);
  }

  deleteTodo(payload: TTaskDeletePayload) {
    return this.taskServices.deleteTask(payload);
  }
}
