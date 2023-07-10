import { Row, Col, Container, Card } from 'react-bootstrap';
import FaqCard from '../components/FaqCard';
import bot_9 from "../assets/bots/9.png"

export default function Downlaod() {
    return (
        <>
            <Container fluid>
                <Row className="align-items-center justify-content-around pt-5 mx-lg-3">
                    <FaqCard
                        question="How do I get started with the diet recommendation app?"
                        answer="To get started, you can go to the chatbot page and start chatting with the bot. You can begin by simply saying hi or ask for a diet plan directly. The bot will ask you a few questions and then recommend a personalised diet plan for you."
                    />
                    <FaqCard
                        question="What diet preferences can I choose from?"
                        answer="Cibo chatbot provide a variety of diet preferences to choose from. You can choose from Ketogenic, Vegan, Vegetarian, Lacto-Vegetarian, Ovo-Vegetarian, Gluten Free, Pescetarian, Paleo, Primal, Low FODMAP and Whole30."
                    />
                    <FaqCard
                        question="Do you cater for all allergic food?"
                        answer="No, but we do cater for the most common allergies. You can choose from Dairy, Egg, Gluten, Wheat, Peanut, Seafood, Shellfish, Grain, Tree Nut, Sesame, Soy and Sulfite."
                    />
                    <FaqCard
                        question="What if I have multiple allergies?"
                        answer="You can choose multiple allergies from the list of allergies provided by the bot. The bot will then recommend a diet plan based on your allergies."
                    />
                    <FaqCard
                        question="What kind of diet plan will I get?"
                        answer="You will get a personalised diet plan based on your diet preferences and allergies. The diet plan will include breakfast, lunch and dinner. You will also get the card with recipes for each meal. Moreover, a link to the full recipe will also be provided."
                    />
                    <FaqCard
                        question="What if I don’t like the recommended diet plan?"
                        answer="You can ask the bot to recommend a new diet plan. The bot will ask you a few questions and then recommend a new diet plan for you."
                    />
                </Row>
            </Container>
        </>
    )
}