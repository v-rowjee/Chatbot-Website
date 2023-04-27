import React, { useState, useEffect, useRef } from 'react'
import { Row, Col, Stack, Container, Image } from 'react-bootstrap'
import APIService from '../services/APIService'
import Message from '../components/Message'
import MessageBar from '../components/MessageBar'
import '../styles/App.css'

export default function Chat(props) {

    const [messagesList, setMessagesList] = useState(() => {
        const savedList = localStorage.getItem('messagesList')
        return savedList !== null
            ? JSON.parse(savedList)
            : [{ isSender: false, buttons: [{ title: 'Ask diet plan', payload: '/ask_diet_plan' }], message: 'Hello, I\'m a chatbot. How can i help?' }]
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
        sendMessage(message)
        setMessage('')
    }

    function sendMessage(message) {
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

                console.log(response)

                const displayNextReply = () => {
                    if (index === response.length) {
                        return;
                    }

                    const reply = response[index];
                    setTyping(true);

                    if (reply.text) {
                        if (reply.buttons) {
                            setMessagesList(prevMessagesList => [
                                ...prevMessagesList,
                                { isSender: false, message: reply.text, buttons: reply.buttons }
                            ])
                            delay = reply.text.length * 50
                        }
                        else {
                            setMessagesList(prevMessagesList => [
                                ...prevMessagesList,
                                { isSender: false, message: reply.text }
                            ]);
                            delay = reply.text.length * 50
                        }

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
                setLoading(false)
            })
    }

    function resetConversation(){
        localStorage.removeItem('messagesList')
        sendMessage('/restart')
        setMessagesList([{ isSender: false, buttons: [{ title: 'Ask diet plan', payload: '/ask_diet_plan' }], message: 'Hello, I\'m a chatbot. How can i help?'}])
    }

    const messagesElements = messagesList.map((msg, index) => {
        return (
            <Message
                key={index}
                message={msg.message}
                isSender={msg.isSender}
                buttons={msg.buttons}
                handleButtonClick={sendMessage}
                isTyping={index === messagesList.length - 1 && typing}
            />
        )

    })


    const messagesEndRef = useRef(null)
    const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    useEffect(() => scrollToBottom(), [messagesList, typing])


    return (
        <>
            <div className='p-nav'></div>
            <Container className='section'>
                <Row className='justify-content-center ps-3 pe-2 h-100 chat'>
                    <Col xs='11' lg='7'>
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
                    resetConversation={resetConversation}
                    isDisabled={typing || loading}
                />
            </Container>
        </>
    )
}