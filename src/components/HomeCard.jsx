import { Card, Button, Col } from 'react-bootstrap'

export default function HomeCard(props) {
    return (
        <Col md={5} className="mb-4">
            <Card className="bg-light-blur rounded-4">
                <Card.Body>
                    <Card.Title className="mb-3 text-primary">{props.icon}</Card.Title>
                    <Card.Title className="mb-3">{props.title}</Card.Title>
                    <Card.Text>{props.text}</Card.Text>
                    <Button variant="light" href={props.link}>Learn More &gt;</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}