import express, { Request, Response } from "express";
import { TodoController } from "../controllers/todoController";
import { validateTodo } from "../middlewares/validateTodo";
import {
  TTaskCreatePayload,
  TTaskDeletePayload,
  TTaskUpdatedPayload,
} from "../types/task.types";

export const todoRoutes = express.Router();

const todoController = new TodoController();

todoRoutes.get("/", async (req, res) => {
  const data = await todoController.getAll();
  res.status(200).json({ allData: data });
});

todoRoutes.post(
  "/",
  validateTodo,
  async (
    req: Request<
      Record<string, unknown>,
      Record<string, unknown>,
      TTaskCreatePayload
    >,
    res: Response
  ) => {
    const data = await todoController.createTodo(req.body);
    res.status(200).json({ createdTask: data });
  }
);

todoRoutes.put(
  "/",
  async (
    req: Request<
      Record<string, unknown>,
      Record<string, unknown>,
      TTaskUpdatedPayload
    >,
    res
  ) => {
    const data = await todoController.updateTodo(req.body);

    res.status(200).json({ updatedTask: data });
  }
);

todoRoutes.delete(
  "/",
  (
    req: Request<
      Record<string, unknown>,
      Record<string, unknown>,
      TTaskDeletePayload
    >,
    res
  ) => {
    const data = todoController.deleteTodo(req.body);
    res.status(200).json({ taskWasDelete: data });
  }
);
