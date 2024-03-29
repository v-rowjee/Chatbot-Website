import { useState } from "react";
import { Card, Button, Modal, Image } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import Linkify from "react-linkify";
import '../styles/App.css'

export default function Message(props) {

    const [show, setShow] = useState(false);

    const handleButtonClick = (button) => {
        props.addMessageToList(button.title)
        props.sendMessage(button.payload)
    }

    let styles = props.isSender ? 'mb-4 shadow-sm bg-secondary-color linkify' : 'mb-2 shadow-sm bg-primary-color text-light linkify'

    return (
        <>
            {props.message && (
                <Card body className={styles}>
                    {props.isTyping
                        ? <TypeAnimation
                            sequence={[props.message]}
                            cursor={true}
                            speed={50}
                        />
                        : <Linkify>
                            {props.message
                                .split('\n')
                                .map((text, index) => <span key={index}>{text}<br /></span>)}
                        </Linkify>
                    }
                </Card>
            )}
            {!props.isTyping && props.buttons && (
                <div>
                    {props.buttons.map((button, index) => (
                        <Button
                            key={index}
                            variant="primary"
                            className="mb-2 me-3"
                            onClick={() => handleButtonClick(button)}>
                            {button.title}
                        </Button>
                    ))}
                </div>
            )}
            {!props.isTyping && props.image && (
                <Card body className={styles} onClick={() => setShow(true)} style={{cursor: 'pointer'}}>
                    <img height="50rem" className="rounded-1 me-3" src={props.image} />
                    <small className="opacity-50">Click to view full card.</small>
                </Card>
            )}
            <Modal show={show} dialogClassName="modal-100w" centered onHide={() => setShow(false)}>
                <Modal.Body>
                    <Image src={props.image} fluid />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" href={props.image} target="_blank">
                        Open In New Tab
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}