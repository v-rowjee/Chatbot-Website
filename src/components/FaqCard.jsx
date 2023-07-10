import { useEffect } from 'react'
import { Card, Col } from 'react-bootstrap'

export default function HomeCard(props) {
    return (
        <Col sm={12} md={5}>
            <Card className='rounded-3 mb-5' bg={'secondary-color'}>
                <Card.Header className='pt-3'><strong>{props.question}</strong></Card.Header>
                <Card.Body>
                    <Card.Text>
                        {props.answer}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}