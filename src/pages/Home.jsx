import { Container, Row, Col, Button } from "react-bootstrap"

export default function Home() {
    return (
        <>
            <Container className="mt-5">
                <Row className="align-items-center g-5">
                    <Col sm={12} md={6} className="text-center text-lg-start">
                        <h2 className="display-5 fw-bold me-lg-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h2>
                        <Button variant="primary" href="/Chat" className="mt-4 px-5">Try For Free Now</Button>
                    </Col>
                    <Col sm={12} md={6} className="text-center">
                        <img
                            src="./src/assets/chatbot.svg"
                            className="w-75"
                            alt="img"
                        />
                    </Col>
                </Row>
            </Container>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fillOpacity="1" d="M0,288L48,282.7C96,277,192,267,288,224C384,181,480,107,576,96C672,85,768,139,864,186.7C960,235,1056,277,1152,256C1248,235,1344,149,1392,106.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </>
    )
}