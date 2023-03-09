import { Container, Row, Col } from 'react-bootstrap';

export default function Footer(props) {

    if (props.hide)
        return (<></>)
    else
        return (
            <footer style={{marginTop: '3rem'}}>
                <Container fluid className="bg-dark text-light text-center py-3">
                    <Row>
                        <Col>
                            <p className='text-center m-0'>© 2023 FYP. All Rights Reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
}
