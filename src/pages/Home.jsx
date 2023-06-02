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
                                sequence={[`Hi, I'm your diet assistant! Are you looking for a diet plan?`]}
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
                            loading="eager"
                        />
                    </Col>
                </Row>
            </Container>
            <Wave1 />
            <HomeSection
                img={bot_4}
                title="Personalized Diet Plans."
                text="Tired of ineffective one-size-fits-all diets? Meet Cibo - the personalized diet recommendation chatbot. Get customized meal plans and nutrition advice based on your unique dietary needs and preferences. Achieve your health goals with Cibo today."
            />
            <HomeSection
                img={bot_3}
                reverse={true}
                title="Easy-to-Use Interface."
                text="Cibo's chatbot offers personalized diet recommendations with an easy-to-use interface that fits any lifestyle. Its clear and concise messaging guides users seamlessly through the conversation, providing the best recommendations 24/7."
            />
            <HomeSection
                img={bot_6}
                title="Expert Advice at Your Fingertips."
                text="Cibo's advanced machine learning algorithms analyze your dietary habits to provide personalized meal plans tailored to your health goals. Get scientifically-proven recommendations that are specifically designed for you."
            />
            <Wave2 />
            <Container>
                <Row className="text-center justify-content-center mb-5">
                    <Col sm={8}>
                        <h3 className="text-bold my-4">Stay Connected on All Channels</h3>
                        <h5 className="opacity-75">Chat with me anytime and anywhere, on all our interfaces</h5>
                    </Col>
                </Row>
                <Row className="justify-content-around">
                    <HomeCard
                        icon={<FaGlobe size={30} />}
                        title="Website Chat"
                        text="Accessible through all browsers and devices."
                        link="/chat"
                    />
                    <HomeCard
                        icon={<FaFacebookMessenger size={30} />}
                        title="Facebook Messenger"
                        text="Chat with me on you favorite social media!"
                        link="https://www.facebook.com/cibochatbot"
                    />
                    <HomeCard
                        icon={<FaMobile size={30} />}
                        title="Android Mobile App"
                        text="Download now and chat with me on the go!"
                        link="/download"
                    />
                </Row>
            </Container>
        </>
    )
}