import { useState, useEffect } from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import _ from "lodash";
import "./Quiz.css";
import wordMap from "../assets/json/bengali-word-map.json";
import loader from "../assets/gifs/loader.gif";
import clickSound from "../assets/sound-effects/click.mp3";
import correctSound from "../assets/sound-effects/correct.mp3";
import incorrectSound from "../assets/sound-effects/incorrect.mp3";

const clickAudio = new Audio(clickSound);
const correctAudio = new Audio(correctSound);
const incorrectAudio = new Audio(incorrectSound);

const categories = wordMap.categories;

const wordTypes = wordMap.wordTypes;

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
  quiz.answerIndex = correctAnswerIndex;
  return quiz;
}

const firstQuiz = generateQuiz(wordMap.words, "All", "All");

function questionClick(question) {
  if (question.sound) {
    const audioToPlay = new Audio(question.sound);
    audioToPlay.play();
  }
}

function Quiz() {
  const [category, setCategory] = useState(categories[0]);
  const [wordType, setWordType] = useState(wordTypes[0]);
  const [questionImgLoading, setQuestionImgLoading] = useState(true);
  const [quiz, setQuiz] = useState(firstQuiz);
  const [selectedOption, setSelectedOption] = useState(null);
  const [checkIndex, setCheckIndex] = useState(null);

  useEffect(() => {
    // If quiz is changed new image needs to be loaded
    setQuestionImgLoading(true);
    setSelectedOption(null);
    setCheckIndex(null);
  }, [quiz]);

  function questionImgLoaded() {
    setQuestionImgLoading(false);
  }

  function getNextQuestion(wordsList, selectCategory, selectWordType) {
    const nextQuestion = generateQuiz(
      wordsList,
      selectCategory,
      selectWordType
    );
    setQuiz(nextQuestion);
  }

  function updateFilter(filterType, filterValue) {
    if (filterType === "CATEGORY" || filterType === "WORD_TYPE") {
      if (filterType === "CATEGORY") {
        if (category !== filterValue) {
          setCategory(filterValue);
          getNextQuestion(wordMap.words, filterValue.value, wordType.value);
        }
      }
      if (filterType === "WORD_TYPE") {
        if (wordType !== filterValue) {
          setWordType(filterValue);
          getNextQuestion(wordMap.words, category.value, filterValue.value);
        }
      }
    }
  }

  function optionClick(optionIndex) {
    setSelectedOption(optionIndex);
    // Reset check index if other option is selected
    if (optionIndex !== checkIndex) {
      setCheckIndex(null);
    }
    clickAudio.play();
    if (quiz.options[optionIndex].sound) {
      const audioToPlay = new Audio(quiz.options[optionIndex].sound);
      audioToPlay.play();
    }
  }

  function checkClick() {
    setCheckIndex(selectedOption);
    if (selectedOption === quiz.answerIndex) {
      correctAudio.play();
    } else {
      incorrectAudio.play();
    }
  }

  return (
    <>
      <Container fluid className="home-container">
        <Row className="justify-content-center">
          <Col className="filter-container" xs={6} sm={6} md={4} lg={3} xl={2}>
            <label htmlFor="dropdown-category" className="dropdown-label">
              বিভাগ:
            </label>
            <DropdownButton
              id="dropdown-category"
              className="dropdown-filter btn-block"
              size="lg"
              variant="outline-primary"
              title={category.display}
            >
              {categories.map((categoryItem) => (
                <Dropdown.Item
                  id={`category-${categoryItem.value}`}
                  key={`category-${categoryItem.value}`}
                  className="dropdown-option"
                  onClick={() => updateFilter("CATEGORY", categoryItem)}
                >
                  {categoryItem.display}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </Col>
          <Col className="filter-container" xs={6} sm={6} md={4} lg={3} xl={2}>
            <label htmlFor="dropdown-word-type" className="dropdown-label">
              ধরন:
            </label>
            <DropdownButton
              id="dropdown-word-type"
              className="dropdown-filter"
              size="lg"
              variant="outline-primary"
              title={wordType.display}
            >
              {wordTypes.map((wordTypeItem) => (
                <Dropdown.Item
                  id={`word-type-${wordTypeItem.value}`}
                  key={`word-type-${wordTypeItem.value}`}
                  className="dropdown-option"
                  onClick={() => updateFilter("WORD_TYPE", wordTypeItem)}
                >
                  {wordTypeItem.display}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </Col>
        </Row>
        <hr />
        {quiz && (
          <>
            <Row className="justify-content-center">
              <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                <div
                  className="click-box-question"
                  onClick={() => questionClick(quiz.question)}
                >
                  {questionImgLoading && (
                    <img
                      className="click-box-question-loader"
                      src={loader}
                      alt="loading"
                    />
                  )}
                  <img
                    className="click-box-question-image"
                    src={quiz.question.image}
                    alt={quiz.question.category}
                    onLoad={questionImgLoaded}
                  />
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <div
                  className={`click-box click-box-option${
                    selectedOption === 0 && checkIndex !== 0
                      ? " click-box-selected"
                      : ""
                  }${
                    checkIndex === 0
                      ? checkIndex === quiz.answerIndex
                        ? " click-box-correct"
                        : " click-box-incorrect"
                      : ""
                  }`}
                  onClick={() => optionClick(0)}
                >
                  <p className="click-box-option-text">
                    {quiz.options[0].text}
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <div
                  className={`click-box click-box-option${
                    selectedOption === 1 && checkIndex !== 1
                      ? " click-box-selected"
                      : ""
                  }${
                    checkIndex === 1
                      ? checkIndex === quiz.answerIndex
                        ? " click-box-correct"
                        : " click-box-incorrect"
                      : ""
                  }`}
                  onClick={() => optionClick(1)}
                >
                  <p className="click-box-option-text">
                    {quiz.options[1].text}
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <div
                  className={`click-box click-box-option${
                    selectedOption === 2 && checkIndex !== 2
                      ? " click-box-selected"
                      : ""
                  }${
                    checkIndex === 2
                      ? checkIndex === quiz.answerIndex
                        ? " click-box-correct"
                        : " click-box-incorrect"
                      : ""
                  }`}
                  onClick={() => optionClick(2)}
                >
                  <p className="click-box-option-text">
                    {quiz.options[2].text}
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <div
                  className={`click-box click-box-option${
                    selectedOption === 3 && checkIndex !== 3
                      ? " click-box-selected"
                      : ""
                  }${
                    checkIndex === 3
                      ? checkIndex === quiz.answerIndex
                        ? " click-box-correct"
                        : " click-box-incorrect"
                      : ""
                  }`}
                  onClick={() => optionClick(3)}
                >
                  <p className="click-box-option-text">
                    {quiz.options[3].text}
                  </p>
                </div>
              </Col>
            </Row>
            <hr />
            <Row className="justify-content-center">
              <Col xs={6} sm={6} md={6} lg={4} xl={3}>
                <div className="click-box-button-container">
                  <button
                    className="click-box-button click-box-button_green"
                    onClick={checkClick}
                  >
                    যাচাই
                  </button>
                </div>
              </Col>
              <Col xs={6} sm={6} md={6} lg={4} xl={3}>
                <div className="click-box-button-container">
                  <button
                    className="click-box-button click-box-button_orange"
                    onClick={() =>
                      getNextQuestion(
                        wordMap.words,
                        category.value,
                        wordType.value
                      )
                    }
                  >
                    পরের প্রশ্ন
                  </button>
                </div>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
}

export default Quiz;
