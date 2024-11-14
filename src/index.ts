import express from "express";
import { todoRoutes } from "./routes/todoRoutes";
import db from "./database";

const app = express();

app.use(express.json());
app.use("/todos", todoRoutes);

const PORT = process.env.PORT || 3000;
(async function () {
  await db.initialize();

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}...`);
  });
})();
