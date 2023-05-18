import "./Vowels.css";
import awSound from "../assets/sounds/aw.mp3";
import aaSound from "../assets/sounds/aa.mp3";
import iSound from "../assets/sounds/i.mp3";
import eeSound from "../assets/sounds/ee.mp3";
import uSound from "../assets/sounds/u.mp3";
import ooSound from "../assets/sounds/oo.mp3";
import riSound from "../assets/sounds/ri.mp3";
import eSound from "../assets/sounds/e.mp3";
import oiSound from "../assets/sounds/oi.mp3";
import oSound from "../assets/sounds/o.mp3";
import ouSound from "../assets/sounds/ou.mp3";
import { Container, Row, Col } from "react-bootstrap";

const soundsMap = {
  অ: awSound,
  আ: aaSound,
  ই: iSound,
  ঈ: eeSound,
  উ: uSound,
  ঊ: ooSound,
  ঋ: riSound,
  এ: eSound,
  ঐ: oiSound,
  ও: oSound,
  ঔ: ouSound,
};

function textClick(event) {
  const sound = soundsMap[event.target.innerText];
  if (sound) {
    const audioToPlay = new Audio(sound);
    audioToPlay.play();
  }
}

function Vowels() {
  return (
    <>
      <Container fluid className="home-container">
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={3} lg={3} xl={3}>
            <div
              className="click-box click-box-vowels"
              onClick={(event) => textClick(event)}
            >
              <p className="click-box-text">অ</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} lg={3} xl={3}>
            <div
              className="click-box click-box-vowels"
              onClick={(event) => textClick(event)}
            >
              <p className="click-box-text">আ</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} lg={3} xl={3}>
            <div
              className="click-box click-box-vowels"
              onClick={(event) => textClick(event)}
            >
              <p className="click-box-text">ই</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} lg={3} xl={3}>
            <div
              className="click-box click-box-vowels"
              onClick={(event) => textClick(event)}
            >
              <p className="click-box-text">ঈ</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={3} lg={3} xl={3}>
            <div
              className="click-box click-box-vowels"
              onClick={(event) => textClick(event)}
            >
              <p className="click-box-text">উ</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} lg={3} xl={3}>
            <div
              className="click-box click-box-vowels"
              onClick={(event) => textClick(event)}
            >
              <p className="click-box-text">ঊ</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} lg={3} xl={3}>
            <div
              className="click-box click-box-vowels"
              onClick={(event) => textClick(event)}
            >
              <p className="click-box-text">ঋ</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={3} lg={3} xl={3}>
            <div
              className="click-box click-box-vowels"
              onClick={(event) => textClick(event)}
            >
              <p className="click-box-text">এ</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} lg={3} xl={3}>
            <div
              className="click-box click-box-vowels"
              onClick={(event) => textClick(event)}
            >
              <p className="click-box-text">ঐ</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} lg={3} xl={3}>
            <div
              className="click-box click-box-vowels"
              onClick={(event) => textClick(event)}
            >
              <p className="click-box-text">ও</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} lg={3} xl={3}>
            <div
              className="click-box click-box-vowels"
              onClick={(event) => textClick(event)}
            >
              <p className="click-box-text">ঔ</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Vowels;
