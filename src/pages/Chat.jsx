import React, { useState, useEffect, useRef } from 'react'
import { Row, Col, Stack, Container } from 'react-bootstrap'
import { nanoid } from 'nanoid'
import APIService from '../services/APIService'
import Message from '../components/Message'
import MessageBar from '../components/MessageBar'
import '../styles/App.css'

export default function MainContent(props) {

    const initMessage = 'Hello, I\'m a chatbot. Ask me anything.'

    const [messagesList, setMessagesList] = useState([{ isSender: false, message: initMessage }])
    const [message, setMessage] = useState('')

    function addMessage(event) {
        event.preventDefault()
        const message = event.target.message.value

        if (message === '') return

        setMessagesList(prevMessagesList => [
            ...prevMessagesList,
            { isSender: true, message }
        ])

        APIService.sendRequest({ message })
            .then(response => {
                response.forEach(reply => {
                    // check if there is a json key value equal to text
                    if (reply.text) {
                        setMessagesList(prevMessagesList => [
                            ...prevMessagesList,
                            { isSender: false, message: reply.text }
                        ])
                    }
                    else if (reply.image) {
                        setMessagesList(prevMessagesList => [
                            ...prevMessagesList,
                            { isSender: false, message: reply.image }
                        ])
                    }
                })
            })
            .catch(error => console.log('error', error))

        setMessage('')
    }

    const messagesElements = messagesList.map(
        msg => <Message
            key={nanoid()}
            message={msg.message}
            isSender={msg.isSender}
            darkMode={props.darkMode}
        />
    )


    const messagesEndRef = useRef(null)
    const scrollToBottom = () =>
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    useEffect(() => {
        scrollToBottom()
    }, [messagesList]);


    return (
        <Container className='section'>
            <Row className='justify-content-center w-100 h-100 m-0 mt-4 chat'>
                <Col xs='11' md='6'>
                    <Stack>
                        {messagesElements}
                        <div ref={messagesEndRef} />
                    </Stack>
                </Col>
            </Row>
            <MessageBar
                handleSubmit={addMessage}
                message={message}
                setMessage={setMessage}
                darkMode={props.darkMode}
            />
        </Container>
    )
}