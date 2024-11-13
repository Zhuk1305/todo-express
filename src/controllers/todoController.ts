import { v4 } from "uuid";
import { TodoDTO } from "../dtos/todoDTO";

interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

let todos: TodoDTO[] = [
  {
    id: "1628003768123",
    title: "Learn Express.js",
    completed: false,
  },
];

export class TodoController {
  getAll() {
    return todos;
  }

  createTodo(payload: { title: string }) {
    const newTodo = new TodoDTO(v4(), payload.title, false);
    todos.push(newTodo);
    return todos;
  }

  updateTodo(id: string, payload: { title: string; completed: boolean }) {
    const todo: ITodo | undefined = todos.find((todo) => todo.id === id);
    if (todo) {
      todo.title = payload.title;
      todo.completed = payload.completed;
    }

    return todos;
  }

  deleteTodo(id: string) {
    todos = todos.filter((todo) => todo.id != id);
    return todos;
  }
}
