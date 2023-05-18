import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "./FormWord.css";
import backButton from "../assets/vector/left_arrow.svg";

function FormWord() {
  const [text, setText] = useState("");

  function changeText(event) {
    const buttonText = event.target.innerText;
    setText(text + buttonText);
  }

  function clearText() {
    if (text.length > 0) {
      setText(text.slice(0, -1));
    }
  }

  return (
    <>
      <Container fluid>
        <Row className="justify-content-center">
          <Col
            className="text-container"
            xs={12}
            sm={10}
            md={10}
            lg={10}
            xl={10}
          >
            <div className="text-box">{text}</div>
            <div className="clear-button" onClick={clearText}>
              <img src={backButton} alt="clear button" />
            </div>
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-center">
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              অ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              আ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ই
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ঈ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              উ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ঊ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ঋ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              এ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ঐ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ও
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ঔ
            </div>
          </Col>
          <Col
            className="button-container d-lg-none d-xl-none"
            xs={4}
            sm={3}
            md={2}
            lg={1}
            xl={1}
          ></Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ্
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              া
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ি
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ী
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ু
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ূ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ৃ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ে
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ৈ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ো
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ৌ
            </div>
          </Col>
          <Col
            className="button-container d-lg-none d-xl-none"
            xs={4}
            sm={3}
            md={2}
            lg={1}
            xl={1}
          ></Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ক
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              খ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              গ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ঘ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ঙ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              চ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ছ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              জ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ঝ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ঞ
            </div>
          </Col>
          <Col
            className="button-container"
            xs={8}
            sm={6}
            md={4}
            lg={1}
            xl={1}
          ></Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ট
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ঠ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ড
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ঢ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ণ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ত
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              থ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              দ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ধ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ন
            </div>
          </Col>
          <Col
            className="button-container"
            xs={8}
            sm={6}
            md={4}
            lg={1}
            xl={1}
          ></Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              প
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ফ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ব
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ভ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ম
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              য
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              র
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ল
            </div>
          </Col>
          <Col
            className="button-container d-xs-block d-sm-none d-md-block"
            xs={4}
            md={4}
            lg={1}
            xl={1}
          ></Col>
          <Col
            className="button-container d-none d-md-block"
            md={4}
            lg={1}
            xl={1}
          ></Col>
          <Col
            className="button-container d-none d-lg-block d-xl-block"
            lg={1}
            xl={1}
          ></Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              শ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ষ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              স
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              হ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ড়
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ঢ়
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              য়
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ৎ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ং
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ঃ
            </div>
          </Col>
          <Col className="button-container" xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="text-button" onClick={changeText}>
              ঁ
            </div>
          </Col>
          <Col
            className="button-container d-lg-none d-xl-none"
            xs={4}
            sm={3}
            md={2}
            lg={1}
            xl={1}
          ></Col>
        </Row>
      </Container>
    </>
  );
}

export default FormWord;
