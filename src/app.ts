import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import quizRoutes from "./routes/quizRoutes";

const app = express();
app.use(bodyParser.json());
app.use("/api", quizRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("API is running...");
});

export default app;
