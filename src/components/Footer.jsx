import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as Wave3 } from '../assets/wave3.svg';

export default function Footer(props) {

    if (props.hide)
        return (<></>)
    else
        return (
            <>
                <Wave3 />

                <footer className="bg-white pb-3">
                    <Container fluid className="pb-3">
                        <p className='float-md-end text-dark m-0'>© 2023 FYP. All Rights Reserved.</p>
                    </Container>
                </footer>
            </>
        )
}
