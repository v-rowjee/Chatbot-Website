import { Container, Row, Col } from "react-bootstrap"

export default function NotFound() {
    return (
        <Container>
            <Row className='section justify-content-center align-items-center'>
                <Col sm='6' className="text-center">
                    Error 404: Page not found
                </Col>
            </Row>
        </Container>
    )
}