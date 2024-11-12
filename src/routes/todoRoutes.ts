import express, { Request, Response } from "express";
import { TodoController } from "../controllers/todoController.js";
import { validateTodo } from "../middlewares/validateTodo.js";

export const todoRoutes = express.Router();

const todoController = new TodoController();

todoRoutes.get("/", (req, res) => {
  res.status(200).json(todoController.getAll());
});

todoRoutes.post("/", validateTodo, (req, res) => {
  res.status(200).json(todoController.createTodo(req.body));
});

todoRoutes.put("/:id", (req, res) => {
  res.status(200).json(todoController.updateTodo(req.params.id, req.body));
});

todoRoutes.delete("/:id", (req, res) => {
  res.status(200).json(todoController.deleteTodo(req.params.id));
});
