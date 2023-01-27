import { Row, Col, Form, Stack, Button } from 'react-bootstrap'
import '../styles/App.css'

export default function MessageBar(props) {

    function hangleChange(event) {
        props.setMessage(event.target.value)
    }

    return (
        <Row className='sticky-bottom justify-content-center w-100 text-center m-0 py-4'>
            <Col xs='12' md='6' className={props.darkMode ? 'bg-dark rounded p-3 shadow-lg' : 'bg-light rounded p-3 shadow-lg'}>
                <Form onSubmit={props.handleSubmit}>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Control
                            autoComplete='off'
                            autoFocus
                            type='text'
                            className={props.darkMode ? 'bg-transparent border-0 text-light' : 'bg-transparent border-0'}
                            placeholder='Enter your message here...'
                            value={props.message}
                            onChange={hangleChange}
                            name='message'
                        />
                        <Button variant='primary' type="submit">Send</Button>
                    </Stack>
                </Form>
            </Col>
        </Row>
    )

}