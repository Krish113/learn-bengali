import { useState } from "react";
import _ from "lodash";

function generateQuiz(wordList, selectedCategory, selectedWordType) {
  const quiz = {};
  let currentWordMap = [...wordList];
  if (selectedCategory !== "All") {
    currentWordMap = currentWordMap.filter(
      (word) => word.category === selectedCategory
    );
  }
  if (selectedWordType !== "All") {
    currentWordMap = currentWordMap.filter(
      (word) => word.wordType === selectedWordType
    );
  }
  if (currentWordMap.length < 4) {
    return null;
  }
  const chosenWords = _.shuffle(currentWordMap).slice(0, 4);
  const questionIndex = Math.floor(Math.random() * 4);
  quiz.question = chosenWords[questionIndex];
  const correctAnswerIndex = Math.floor(Math.random() * 4);
  // Swap if question index and correctAnswer index is not same
  if (questionIndex !== correctAnswerIndex) {
    chosenWords[questionIndex] = chosenWords[correctAnswerIndex];
    chosenWords[correctAnswerIndex] = quiz.question;
  }
  quiz.options = chosenWords;
  return quiz;
}

const useQuestion = (jsonData, selectedCategory, selectedWordType) => {
  const currentQuiz = generateQuiz(jsonData, selectedCategory, selectedWordType);
  const [quiz, setQuizData] = useState(currentQuiz);

  const setQuiz = () => {
    const newQuestion = generateQuiz(jsonData, selectedCategory, selectedWordType);
    setQuizData(newQuestion);
  };
  return [quiz, setQuiz];
};

export default useQuestion;
