import { useState } from 'react'
import { Row, Col, Form, Stack, Button, Modal } from 'react-bootstrap'
import { FaRedoAlt } from 'react-icons/fa'
import '../styles/App.css'

export default function MessageBar(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleConfirm = () => {
        handleClose() 
        props.sendMessage('/restart')
    }

    const hangleChange = (event) => {
        props.setMessage(event.target.value)
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()
        var message = event.target.message.value
        props.addMessageToList(message)
        props.sendMessage(message)
    }


    var textColor = localStorage.getItem("selectedTheme") === "dark" ? 'text-light bg-transparent border-0' : 'text-dark bg-transparent border-0'


    return (
        <>
            <Row className='sticky-bottom justify-content-center w-100 text-center m-0 py-3'>
                <Col xs='12' lg='8' className='bg-neutral-color rounded p-3 shadow-lg'>
                    <Form onSubmit={handleSubmitForm}>
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
                            <Button variant='outline-danger' disabled={props.isDisabled} onClick={handleShow} type='submit' className='px-2 m-0' title='Reset Conversation'>
                                <FaRedoAlt />
                            </Button>
                        </Stack>
                    </Form>
                </Col>
            </Row >
            <Modal show={show} centered onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Reset Conversation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to restart this conversation? All data will be loss.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleConfirm}>
                        Reset
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}