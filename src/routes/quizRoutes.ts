import express from "express";
import {
  createQuiz,
  getQuiz,
  submitAnswer,
  getResults,
} from "../controllers/quizController";

const router = express.Router();

router.post("/quiz", createQuiz);
router.get("/quiz/:id", getQuiz);
router.post("/quiz/:id/answer", submitAnswer);
router.get("/quiz/:id/results/:userId", getResults);

export default router;
