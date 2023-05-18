import "./Home.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Container fluid className="home-container">
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={6} lg={4} xl={3}>
            <Link className="link-text" to="vowels">
              <Card className="click-box app-card">
                <Card.Body>
                  <Card.Title className="app-card-title">
                    স্বরবর্ণ পরিচয়
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} xl={3}>
            <Link className="link-text" to="consonants">
              <Card className="click-box app-card">
                <Card.Body>
                  <Card.Title className="app-card-title">
                    ব্যঞ্জনবর্ণ পরিচয়
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} xl={3}>
            <Link className="link-text" to="form-word">
              <Card className="click-box app-card">
                <Card.Body>
                  <Card.Title className="app-card-title">শব্দ গঠন</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} xl={3}>
            <Link className="link-text" to="word-quiz">
              <Card className="click-box app-card">
                <Card.Body>
                  <Card.Title className="app-card-title">পড়া শেখো</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
