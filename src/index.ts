import express from "express";
import { todoRoutes } from "./routes/todoRoutes.js";

const app = express();

app.use(express.json());
app.use("/todos", todoRoutes);

const PORT = process.env.PORT || 3000;
(async function () {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}...`);
  });
})();
