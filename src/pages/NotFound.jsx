import { Container, Row, Col } from "react-bootstrap"

export default function NotFound() {
    return (
        <Container>
            <Row className='justify-content-center align-items-center' style={{ height: `calc(100vh - ${113}px - 3rem)` }}>
                <Col sm='6' className="text-center">
                    Error 404: Page not found
                </Col>
            </Row>
        </Container>
    )
}