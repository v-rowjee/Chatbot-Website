import { Container, Row, Col, Button } from "react-bootstrap"
import chatbot from "../assets/chatbot.svg"
import { ReactComponent as Wave } from '../assets/wave.svg';

export default function Home() {
    return (
        <>
            <Container className="mt-5">
                <Row className="align-items-center g-5">
                    <Col sm={12} md={6} className="text-center text-lg-start">
                        <h2 className="display-5 fw-bold me-lg-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h2>
                        <Button size="lg" variant="primary" href="/Chat" className="mt-4 px-5">Try For Free Now</Button>
                    </Col>
                    <Col sm={12} md={6} className="text-center">
                        <img
                            src={chatbot}
                            className="w-75"
                            alt="img"
                        />
                    </Col>
                </Row>
            </Container>
            <Wave />
        </>
    )
}