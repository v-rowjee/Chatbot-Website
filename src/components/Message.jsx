import { Card, Button, Row, Col } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import '../styles/App.css'

export default function Message(props) {

    let styles = props.isSender ? 'mb-3 shadow-sm bg-secondary-color' : 'mb-3 shadow-sm bg-primary-color text-light'

    return (
        <>
            <Card body className={styles}>
                {props.isTyping
                    ? <TypeAnimation
                        sequence={[props.message]}
                        cursor={true}
                        speed={50}
                    />
                    : props.message
                }
            </Card>
            {!props.isTyping && props.buttons && (
                <div>
                    {props.buttons.map((button, index) => (
                        <Button
                            key={index}
                            variant="primary"
                            className="mb-3 me-3"
                            onClick={() => props.handleButtonClick(button.payload)}>
                            {button.title}
                        </Button>
                    ))}
                </div>
            )}
        </>
    )
}