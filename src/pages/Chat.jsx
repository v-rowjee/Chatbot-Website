import React, { useState, useEffect, useRef } from 'react'
import { Row, Col, Stack, Container } from 'react-bootstrap'
import APIService from '../services/APIService'
import Message from '../components/Message'
import MessageBar from '../components/MessageBar'
import '../styles/App.css'

export default function MainContent(props) {

    const initMessage = 'Hello, I\'m a chatbot. Ask me anything.'

    const [messagesList, setMessagesList] = useState([{ isSender: false, message: initMessage }])
    const [message, setMessage] = useState('')
    const [typing, setTyping] = useState(false);

    function addMessage(event) {
        event.preventDefault()
        const message = event.target.message.value

        if (message === '' || typing) return

        setMessagesList(prevMessagesList => [
            ...prevMessagesList,
            { isSender: true, message }
        ])

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
                        setTyping(false);
                        index++;
                        displayNextReply();
                    }, delay);
                };

                displayNextReply();
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
        return index === messagesList.length - 1 && typing
            ? <Message
                key={index}
                message={msg.message}
                isSender={msg.isSender}
                isTyping={true}
                darkMode={props.darkMode}
            />
            : <Message
                key={index}
                message={msg.message}
                isSender={msg.isSender}
                isTyping={false}
                darkMode={props.darkMode}
            />

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
                handleSubmit={addMessage}
                message={message}
                setMessage={setMessage}
                isDisabled={typing}
                darkMode={props.darkMode}
            />
        </Container>
    )
}