import { Container, Row, Col } from "react-bootstrap"

export default function NotFound() {
    return (
        <Container>
            <Row className='justify-content-center align-items-center' style={{ height: `calc(100vh - ${143}px )` }}>
                <Col sm='6' className="text-center">
                    <h5 className="p-0">Error 404: Page not found</h5>
                </Col>
            </Row>
        </Container>
    )
}