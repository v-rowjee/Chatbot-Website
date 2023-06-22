import { Card, Button, Alert } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import Linkify from "react-linkify";
import '../styles/App.css'

export default function Message(props) {

    let styles = props.isSender ? 'mb-4 shadow-sm bg-secondary-color linkify' : 'mb-2 shadow-sm bg-primary-color text-light linkify'

    return (
        <>
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
                    // <Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
                    //     <a href={decoratedHref} key={key} target="_blank">
                    //         {decoratedText}
                    //     </a>
                    // )}>
                    //     {props.message
                    //         .split('\n')
                    //         .map((text, index) => <span key={index}>{text}<br /></span>)}
                    // </Linkify>
                }
            </Card>
            {!props.isTyping && props.buttons && (
                <div>
                    {props.buttons.map((button, index) => (
                        <Button
                            key={index}
                            variant="primary"
                            className="mb-2 me-3"
                            onClick={() => props.handleButtonClick(button.title)}>
                            {button.title}
                        </Button>
                    ))}
                </div>
            )}
        </>
    )
}