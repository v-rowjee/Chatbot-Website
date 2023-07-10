import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as Wave3 } from '../assets/wave3.svg';

export default function Footer(props) {

    if (props.hide)
        return (<></>)
    else
        return (
            <>
                <div className='sticky-top mt-5'>
                    {/* <Wave3 /> */}
                    <footer className="bg-primary opacity-75 p-3">
                        <Container fluid className="pb-3">
                            <p className='float-md-end text-light m-0'>© {new Date().getFullYear()} FYP. All Rights Reserved.</p>
                        </Container>
                    </footer>
                </div>
            </>
        )
}
