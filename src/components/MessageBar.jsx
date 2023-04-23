import { Row, Col, Form, Stack, Button } from 'react-bootstrap'
import '../styles/App.css'

export default function MessageBar(props) {

    function hangleChange(event) {
        props.setMessage(event.target.value)
    }

    return (
        <Row className='sticky-bottom justify-content-center w-100 text-center m-0 py-3'>
            <Col xs='11' lg='7' className='bg-neutral-color rounded p-3 shadow-lg'>
                <Form onSubmit={props.handleSubmit}>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Control
                            autoComplete='off'
                            autoFocus
                            type='text'
                            className='bg-transparent border-0 text-dark'
                            placeholder='Enter your message here...'
                            value={props.message}
                            onChange={hangleChange}
                            name='message'
                        />
                        <Button variant='primary' disabled={props.isDisabled} type="submit">
                            {props.isDisabled ? '...' : 'Send'}
                        </Button>
                    </Stack>
                </Form>
            </Col>
        </Row>
    )

}