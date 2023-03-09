import React, { useState, useEffect, useRef } from 'react'
import { Row, Col, Stack, Container } from 'react-bootstrap'
import APIService from '../services/APIService'
import Message from '../components/Message'
import MessageBar from '../components/MessageBar'
import '../styles/App.css'

export default function MainContent(props) {

    const [messagesList, setMessagesList] = useState(() => {
        const savedList = localStorage.getItem('messagesList')
        return savedList !== null
            ? JSON.parse(savedList)
            : [{ isSender: false, message: 'Hello, I\'m a chatbot. Ask me anything.' }]
    })
    const [message, setMessage] = useState('')
    const [typing, setTyping] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        localStorage.setItem('messagesList', JSON.stringify(messagesList));
      }, [messagesList]);

    function addMessage(event) {
        event.preventDefault()
        const message = event.target.message.value

        if (message === '' || typing || loading) return

        setMessagesList(prevMessagesList => [
            ...prevMessagesList,
            { isSender: true, message }
        ])

        setLoading(true)

        APIService.sendRequest({ message })
            .then(response => {
                let index = 0
                let delay = 1000

                const displayNextReply = () => {
                    if (index === response.length) {
                        return;
                    }

                    const reply = response[index];
                    setTyping(true);

                    if (reply.text) {
                        setMessagesList(prevMessagesList => [
                            ...prevMessagesList,
                            { isSender: false, message: reply.text }
                        ]);
                        delay = reply.text.length * 50

                    } else if (reply.image) {
                        setMessagesList(prevMessagesList => [
                            ...prevMessagesList,
                            { isSender: false, message: reply.image }
                        ]);
                        delay = reply.image.length * 50
                    }

                    setTimeout(() => {
                        setTyping(false)
                        index++
                        displayNextReply()
                    }, delay)
                };

                displayNextReply()
                setLoading(false)
            })
            .catch(error => {
                console.log('Error', error)
                setMessagesList(prevMessagesList => [
                    ...prevMessagesList,
                    { isSender: false, message: "There was an error fetching data from the API. Try again later." }
                ]);
            });

        setMessage('')
    }

    const messagesElements = messagesList.map((msg, index) => {
        return (
            <Message
                key={index}
                message={msg.message}
                isSender={msg.isSender}
                isTyping={index === messagesList.length - 1 && typing}
                darkMode={props.darkMode}
            />
        )

    })


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
                handleSubmit={(e) => addMessage(e)}
                message={message}
                setMessage={setMessage}
                isDisabled={typing || loading}
                darkMode={props.darkMode}
            />
        </Container>
    )
}