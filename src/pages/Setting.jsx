import { useState } from 'react';
import { Row, Col, Container, Image, Card, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import bot_9 from "../assets/bots/10.png"
import APIService from '../services/APIService';

export default function Setting() {

    const [serverURL, setServerURL] = useState(APIService.host)
    const [passphrase, setPassphrase] = useState('')

    function handleChangeServerURL(event) {
        setServerURL(event.target.value)
    }

    function handleChangePassphrase(event) {
        setPassphrase(event.target.value)
    }

    function changeServerURL(event) {
        event.preventDefault()
        if(passphrase === '1234') {
            APIService.host = serverURL
            setServerURL(serverURL)
            setPassphrase('')
            toast.error('Server URL has been updated', {
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

    return (
        <>
            <div className="p-nav"></div>
            <Container>
                <Row className="align-items-center justify-self-center">
                    <Col sm={12} md={6} className="text-center text-md-start p-5 p-md-0 ps-md-5">
                        <h1 className="display-4 mb-4">Setting</h1>
                        <Card className='bg-transparent1 shadow-sm round-4'>
                            <Card.Header className='bg-secondary-color1 round-4'>Server URL</Card.Header>
                            <Card.Body className='bg-secondary1 round-4'>
                                <Card.Text>
                                    <Form.Control 
                                    type="text" 
                                    className="mb-3" 
                                    placeholder="New Server URL" 
                                    name='serverURL'
                                    onChange={handleChangeServerURL}
                                    value={serverURL} />
                                    <Row>
                                        <Col>
                                            <Form.Control
                                                autoComplete='off'
                                                autoFocus
                                                type="text"
                                                className="mb-3"
                                                placeholder="Passphrase"
                                                name='passphrase'
                                                onChange={handleChangePassphrase}
                                                value={passphrase} />
                                        </Col>
                                        <Col>
                                            <Button type='submit' onClick={changeServerURL} className='w-100'>Change</Button>
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} className="text-center">
                        <Image src={bot_9} alt="img" fluid />
                    </Col>


                </Row>
            </Container>
        </>
    )
}