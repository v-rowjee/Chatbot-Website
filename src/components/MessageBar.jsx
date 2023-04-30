import { Row, Col, Form, Stack, Button } from 'react-bootstrap'
import { FaRedoAlt } from 'react-icons/fa'
import '../styles/App.css'

export default function MessageBar(props) {

    function hangleChange(event) {
        props.setMessage(event.target.value)
    }

    var textColor = localStorage.getItem("selectedTheme") === "dark" ? 'text-light bg-transparent border-0' : 'text-dark bg-transparent border-0'


    return (
        <Row className='sticky-bottom justify-content-center w-100 text-center m-0 py-3'>
            <Col xs='12' lg='7' className='bg-neutral-color rounded p-3 shadow-lg'>
                <Form onSubmit={props.handleSubmit}>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Control
                            autoComplete='off'
                            autoFocus
                            type='text'
                            className={textColor}
                            placeholder='Enter your message here...'
                            value={props.message}
                            onChange={hangleChange}
                            name='message'
                        />
                        <Button variant='primary' disabled={props.isDisabled} type="submit">
                            {props.isDisabled ? '...' : 'Send'}
                        </Button>
                        <Button variant='outline-danger' disabled={props.isDisabled} onClick={props.resetConversation} type='submit' className='px-2 m-0' title='Reset Conversation'>
                            <FaRedoAlt />
                        </Button>
                    </Stack>
                </Form>
            </Col>
        </Row >
    )

}