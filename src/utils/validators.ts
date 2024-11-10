export const validateQuizInput = (title: string, questions: any[]): boolean => {
  return !!(
    title &&
    questions &&
    questions.length > 0 &&
    questions.every((q) => q.options.length === 4)
  );
};

export const validateAnswer = (selectedOption: number): boolean => {
  return selectedOption >= 0 && selectedOption <= 3;
};
