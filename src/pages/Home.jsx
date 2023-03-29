import { Container, Row, Col, Button, Image } from "react-bootstrap"
import { TypeAnimation } from "react-type-animation";
import HomeSection from "../components/HomeSection";
import HomeCard from "../components/HomeCard";
import { ReactComponent as Wave1 } from '../assets/wave1.svg';
import { ReactComponent as Wave2 } from '../assets/wave2.svg';
import { FaGlobe } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { FaMobile } from 'react-icons/fa';
import bot_1 from "../assets/bots/1.png"
import bot_3 from "../assets/bots/3.png"
import bot_4 from "../assets/bots/4.png"
import bot_6 from "../assets/bots/6.png"



export default function Home() {
    return (
        <>
            <div className="p-nav"></div>
            <Container>
                <Row className="align-items-center justify-self-center">
                    <Col sm={12} md={6} className="text-center text-md-start p-5 p-md-0 ps-md-5">
                        <h1 className="display-5 fw-bold me-lg-5">
                            <TypeAnimation
                                sequence={["Hi, I'm DietBot! How can I help you today?"]}
                                speed={60}
                                cursor={false}
                            />
                        </h1>
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
            <HomeSection
                img={bot_4}
                reverse={false}
                title="Customised Meal Plans"
                text="The bot will help you with your diet by providing you with a meal plan and recipes. It will also help you with your fitness by providing you with a workout plan and exercises."
            />
            <HomeSection
                img={bot_3}
                reverse={true}
                title="Customised Workout Plans"
                text="The bot will help you with your diet by providing you with a meal plan and recipes. It will also help you with your fitness by providing you with a workout plan and exercises."
            />
            <HomeSection
                img={bot_6}
                reverse={false}
                title="Customised Meal Plans"
                text="The bot will help you with your diet by providing you with a meal plan and recipes. It will also help you with your fitness by providing you with a workout plan and exercises."
            />
            <Wave2 />
            <Container>
                <Row className="text-center justify-content-center mb-5">
                    <Col sm={8}>
                        <h3 className="text-bold my-4">Stay Connected on All Channels</h3>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos debitis a.</h5>
                    </Col>
                </Row>
                <Row className="justify-content-around">
                    <HomeCard
                        icon={<FaGlobe size={30} />}
                        title="Website Chat"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        link="/chat"
                    />
                    <HomeCard
                        icon={<FaFacebookMessenger size={30} />}
                        title="Facebook Messenger"
                        text="Soon avilable on Messenger, Telegram, WhatsApp, and more!"
                        link="https://www.facebook.com"
                    />
                    <HomeCard
                        icon={<FaMobile size={30} />}
                        title="Mobile Playstore"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        link="/download"
                    />
                </Row>
            </Container>
        </>
    )
}