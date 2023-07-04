import React, { useState, useEffect, useRef } from 'react'
import { Row, Col, Stack, Container } from 'react-bootstrap'
import { toast } from 'react-toastify';
import APIService from '../services/APIService'
import Message from '../components/Message'
import MessageBar from '../components/MessageBar'
import '../styles/App.css'

export default function Chat(props) {

    const [messagesList, setMessagesList] = useState(() => {
        const savedList = localStorage.getItem('messagesList')
        return savedList !== null
            ? JSON.parse(savedList)
            : [{ isSender: false, buttons: [{ title: 'Ask diet plan', payload: '/ask_diet_plan' }], message: `Hello, I\'m your diet assistant. How can i help?` }]
    })
    const [message, setMessage] = useState('')
    const [typing, setTyping] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

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
                let delay = 1000

                console.log(response)

                response.map(reply => {
                    setTyping(true);

                    if (reply.text) {
                        if (reply.buttons) {
                            setMessagesList(prevMessagesList => [
                                ...prevMessagesList,
                                { isSender: false, message: reply.text, buttons: reply.buttons }
                            ])
                            delay = reply.text.length * 50
                        }
                        else if (reply.image) {
                            setMessagesList(prevMessagesList => [
                                ...prevMessagesList,
                                { isSender: false, image: reply.image }
                            ]);
                            delay = 10
                        }
                        else {
                            setMessagesList(prevMessagesList => [
                                ...prevMessagesList,
                                { isSender: false, message: reply.text }
                            ])
                            delay = reply.text.length * 50
                        }

                    } else if (reply.image) {
                        setMessagesList(prevMessagesList => [
                            ...prevMessagesList,
                            { isSender: false, image: reply.image }
                        ]);
                        delay = 10
                    }
                    else {
                        toast.error('An error occured on our side. Please try again.', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        })
                    }

                    setTimeout(() => setTyping(false), delay)
                })

                setLoading(false)
                setError(false)
            })
            .catch(error => {
                setLoading(false)

                setError(true)
                setMessagesList(messagesList)
            })
    }

    function resetConversation() {
        sendMessage('/restart');
        if (!error) {
            localStorage.removeItem('messagesList')
            setMessagesList([{ isSender: false, buttons: [{ title: 'Ask diet plan', payload: '/ask_diet_plan' }], message: `Hello, I\'m your diet assistant. How can i help?` }]);
            toast.error('Conversation has been restarted.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }
    }

    const messagesElements = messagesList.map((msg, index) => {
        return (
            <Message
                key={index}
                message={msg.message}
                isSender={msg.isSender}
                buttons={msg.buttons}
                image={msg.image}
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
                    <Col xs='12' lg='8'>
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