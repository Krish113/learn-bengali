import { useState } from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import _ from "lodash";
import "./Quiz.css";
import wordMap from "../assets/json/bengali-word-map.json";

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
  return quiz;
}

const firstQuiz = generateQuiz(wordMap.words, 'All', 'All');

function questionClick(event, question) {
  if (question.sound) {
    const audioToPlay = new Audio(question.sound);
    audioToPlay.play();
  }
}

function optionClick(event) {}

function Quiz() {
  const [category, setCategory] = useState(categories[0]);
  const [wordType, setWordType] = useState(wordTypes[0]);

  const [quiz, setQuiz] = useState(firstQuiz);

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

  return (
    <>
      <Container fluid className="home-container">
        <Row className="justify-content-md-center">
          <Col className="filter-container" xs={6} sm={6} md={3} lg={2} xl={2}>
            <label htmlFor="dropdown-category" className="dropdown-label">
              বিভাগ:
            </label>
            <DropdownButton
              id="dropdown-category"
              className="dropdown-filter btn-block"
              size="lg"
              variant="secondary"
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
          <Col className="filter-container" xs={6} sm={6} md={3} lg={2} xl={2}>
            <label htmlFor="dropdown-word-type" className="dropdown-label">
              ধরন:
            </label>
            <DropdownButton
              id="dropdown-word-type"
              className="dropdown-filter"
              size="lg"
              variant="secondary"
              title={wordType.display}
            >
              {wordTypes.map((wordTypeItem) => (
                <Dropdown.Item
                  id={`word-type-${wordTypeItem.value}`}
                  key={`word-type-${wordTypeItem.value}`}
                  className="dropdown-option"
                  onClick={() =>
                    updateFilter("WORD_TYPE", wordTypeItem)
                  }
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
            <Row className="justify-content-md-center">
              <Col xs={12} sm={12} md={10} lg={8} xl={6}>
                <div
                  className="click-box-question"
                  onClick={(event) => questionClick(event, quiz.question)}
                >
                  <img
                    className="click-box-question-image"
                    src={quiz.question.image}
                    alt={quiz.question.category}
                  />
                </div>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col xs={12} sm={12} md={5} lg={4} xl={3}>
                <div
                  className="click-box click-box-option"
                  onClick={(event) => optionClick(event)}
                >
                  <p className="click-box-option-text">
                    {quiz.options[0].text}
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={5} lg={4} xl={3}>
                <div
                  className="click-box click-box-option"
                  onClick={(event) => optionClick(event)}
                >
                  <p className="click-box-option-text">
                    {quiz.options[1].text}
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col xs={12} sm={12} md={5} lg={4} xl={3}>
                <div
                  className="click-box click-box-option"
                  onClick={(event) => optionClick(event)}
                >
                  <p className="click-box-option-text">
                    {quiz.options[2].text}
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={5} lg={4} xl={3}>
                <div
                  className="click-box click-box-option"
                  onClick={(event) => optionClick(event)}
                >
                  <p className="click-box-option-text">
                    {quiz.options[3].text}
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col xs={6} sm={6} md={5} lg={4} xl={3}>
                <div className="click-box-button-container">
                  <button className="click-box-button click-box-button_green">
                    যাচাই
                  </button>
                </div>
              </Col>
              <Col xs={6} sm={6} md={5} lg={4} xl={3}>
                <div className="click-box-button-container">
                  <button
                    className="click-box-button click-box-button_orange"
                    onClick={() => getNextQuestion(wordMap.words, category.value, wordType.value)}
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
