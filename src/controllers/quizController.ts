import { Quiz } from "../models/Quiz";
import { quizzes, results } from "../services/inMemoryDb";
import { validateQuizInput, validateAnswer } from "..//utils/validators";

export const createQuiz = (req: any, res: any) => {
  const { title, questions } = req.body;

  if (!validateQuizInput(title, questions))
    return res.status(400).send("Invalid quiz data");

  const quiz: Quiz = {
    id: String(quizzes.length + 1),
    title,
    questions,
  };
  quizzes.push(quiz);
  res.status(201).send({ id: quiz.id, message: "Quiz created successfully" });
};

export const getQuiz = (req: any, res: any) => {
  const quiz = quizzes.find((q) => q.id === req.params.id);
  if (!quiz) return res.status(404).send("Quiz not found");

  const questions = quiz.questions.map((q) => ({
    id: q.id,
    text: q.text,
    options: q.options,
  }));
  res.json({ id: quiz.id, title: quiz.title, questions });
};

export const submitAnswer = (req: any, res: any) => {
  const quiz = quizzes.find((q) => q.id === req.params.id);
  if (!quiz) return res.status(404).send("Quiz not found");

  const { questionId, selectedOption, userId } = req.body;
  const question = quiz.questions.find((q) => q.id === questionId);

  if (!question || !validateAnswer(selectedOption))
    return res.status(400).send("Invalid answer data");

  const isCorrect = question.correctOption === selectedOption;
  let userResult = results.find(
    (r) => r.quizId === quiz.id && r.userId === String(userId)
  );
  if (!userResult?.userId) {
    userResult = {
      quizId: quiz.id,
      userId: String(userId),
      score: isCorrect ? 1 : 0,
      answers: [{ questionId, selectedOption, isCorrect }],
    };
    results.push(userResult);
  } else {
    userResult.score = isCorrect ? userResult.score + 1 : userResult.score;
    userResult.answers.push({ questionId, selectedOption, isCorrect });
  }

  const responseData: { correct: boolean; correctOption?: number } = {
    correct: isCorrect,
  };
  if (!isCorrect) {
    responseData.correctOption = question.correctOption;
  }
  res.json({ ...responseData });
};

export const getResults = (req: any, res: any) => {
  const result = results.find(
    (r) => r.quizId === req.params.id && r.userId === req.params.userId
  );
  if (!result) {
    return res.status(404).send("Result not found");
  }
  res.json(result);
};
