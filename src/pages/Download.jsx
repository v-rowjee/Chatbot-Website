import { Row, Col, Container, Image } from 'react-bootstrap';
import bot_9 from "../assets/bots/9.png"

export default function Downlaod() {
    return (
        <>
            <Container>
                <Row className="align-items-center justify-self-center">
                    <Col sm={12} md={6} className="text-center">
                        <Image src={bot_9} alt="img" fluid />
                    </Col>
                    <Col sm={12} md={6} className="text-center text-md-start p-5 p-md-0 ps-md-5">
                        <h1 className="display-5 fw-bold me-lg-5 mb-3">
                            Comming Soon.
                        </h1>
                        <a href="" className="btn btn-primary disabled">Download</a>
                    </Col>

                </Row>
            </Container>
        </>
    )
}