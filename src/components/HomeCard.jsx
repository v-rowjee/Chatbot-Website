import { Card, Button, Col } from 'react-bootstrap'

export default function HomeCard(props) {
    const isDisabled = props.disabled || false;

    return (
        <Col md={4} className="mb-4">
            <Card className="bg-transparent rounded-4">
                <Card.Body className='bg-secondary-color rounded-4'>
                    <Card.Title className="mb-3 text-primary">{props.icon}</Card.Title>
                    <Card.Title className="mb-3">{props.title}</Card.Title>
                    <Card.Text>{props.text}</Card.Text>
                    <Button variant="light" href={props.link} disabled={isDisabled}>
                        {isDisabled ? 'Coming Soon' : 'Learn More'}
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}