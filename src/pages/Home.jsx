import { Container, Row, Col, Button, Image } from "react-bootstrap"
import { TypeAnimation } from "react-type-animation";
import HomeSection from "../components/HomeSection";

import { ReactComponent as Wave1 } from '../assets/wave1.svg';
import { ReactComponent as Wave2 } from '../assets/wave2.svg';
import { FaGlobe } from 'react-icons/fa';
import { FaCommentDots } from 'react-icons/fa';
import { FaMobile } from 'react-icons/fa';
import bot_1 from "../assets/bots/1.png"
import bot_2 from "../assets/bots/2.png"
import bot_3 from "../assets/bots/3.png"
import bot_4 from "../assets/bots/4.png"
import bot_5 from "../assets/bots/5.png"
import bot_6 from "../assets/bots/6.png"
import bot_7 from "../assets/bots/7.png"
import bot_8 from "../assets/bots/8.png"
import bot_9 from "../assets/bots/9.png"
import bot_10 from "../assets/bots/10.png"
import bot_11 from "../assets/bots/11.png"
import bot_12 from "../assets/bots/12.png"
import HomeCard from "../components/HomeCard";

export default function Home() {
    return (
        <>
            <Container>
                <Row className="align-items-center">
                    <Col sm={12} md={6} className="text-center text-md-start p-5 p-md-0 ps-md-5">
                        <h2 className="display-5 fw-bold me-lg-5">
                            <TypeAnimation
                                sequence={["Hi, I'm DietBot! How can I help you today?"]}
                                speed={60}
                                cursor={false}
                            />
                        </h2>
                        <Button size="lg" variant="primary" href="/Chat" className="my-5 mb-md-0 px-5">Try For Free Now</Button>
                    </Col>
                    <Col sm={12} md={6} className="text-center">
                        <Image
                            src={bot_1}
                            alt="img"
                            fluid
                        />
                    </Col>
                </Row>
            </Container>
            <Wave1 />
            <HomeSection img={bot_4} reverse={false}/>
            <HomeSection img={bot_3} reverse={true}/>
            <HomeSection img={bot_6} reverse={false}/>
            <Wave2 />
            <Container>
                <Row className="text-center justify-content-center mb-5">
                    <Col sm={8}>
                        <h2 className="text-bold my-4">Stay Connected on All Channels</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos debitis a, temporibus itaque aperiam earum necessitatibus maxime quibusdam magnam, repudiandae cumque voluptate, veritatis iure culpa!</p>
                    </Col>
                </Row>
                <Row className="h-100 justify-content-around">
                    <HomeCard icon={<FaGlobe size={30}/>} title="Website" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                    <HomeCard icon={<FaCommentDots size={30}/>} title="Chat" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                    <HomeCard icon={<FaMobile/>} title="Mobile" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                </Row>
            </Container>
        </>
    )
}