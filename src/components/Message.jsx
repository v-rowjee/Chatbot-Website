import { Card } from "react-bootstrap";
import '../App.css'

export default function Message(props) {
    let styles
    if (props.isSender)
        styles = props.darkMode
            ? 'mb-3 shadow-sm bg-dark text-light'
            : 'mb-3 shadow-sm bg-light-blur'
    else
        styles = 'mb-3 shadow-sm bg-blue-blur text-light'

    return (
        <Card body className={styles}>
            {props.message}
        </Card>
    )
}