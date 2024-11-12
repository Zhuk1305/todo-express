import { NextFunction, Request, Response } from "express";

export const validateTodo = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { title } = req.body;
  if (!title || typeof title !== "string") {
    res.status(400).json({ message: "Title is required and must be string" });
    return;
  }
  next();
};
