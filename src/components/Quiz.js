import "./Quiz.css";
import { Container, Row, Col } from "react-bootstrap";

function textClick(event) {}

function Quiz() {
  return (
    <>
      <Container fluid className="home-container">
        <Row className="justify-content-md-center">
          <Col xs={12} sm={12} md={10} lg={8} xl={6}>
            <div
              className="click-box-question"
              onClick={(event) => textClick(event)}
            >
              <img
                className="click-box-question-image"
                src="https://cdn.pixabay.com/photo/2012/04/26/19/36/mango-42898_640.png"
                alt="Fruit"
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={12} md={5} lg={4} xl={3}>
            <div
              className="click-box click-box-option"
              onClick={(event) => textClick(event)}
            >
              <p className="click-box-option-text">ডিম</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={5} lg={4} xl={3}>
            <div
              className="click-box click-box-option"
              onClick={(event) => textClick(event)}
            >
              <p className="click-box-option-text">আম</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={12} md={5} lg={4} xl={3}>
            <div
              className="click-box click-box-option"
              onClick={(event) => textClick(event)}
            >
              <p className="click-box-option-text">দুধ</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={5} lg={4} xl={3}>
            <div
              className="click-box click-box-option"
              onClick={(event) => textClick(event)}
            >
              <p className="click-box-option-text">মাছ</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={6} sm={6} md={5} lg={4} xl={3}>
            <div className="click-box-button-container">
              <button className="click-box-button click-box-button_green">যাচাই</button>
            </div>
          </Col>
          <Col xs={6} sm={6} md={5} lg={4} xl={3}>
            <div className="click-box-button-container">
              <button className="click-box-button click-box-button_orange">পরের প্রশ্ন</button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Quiz;
