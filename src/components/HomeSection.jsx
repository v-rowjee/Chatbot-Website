import { Container, Row, Col, Image, Button } from 'react-bootstrap';

export default function HomeSection(props) {
  const row = props.reverse ? "align-items-center flex-row-reverse" : "align-items-center"

  return (
    <section className="bg-blue-custom text-light py-3">
      <Container>
        <Row className={row}>
          <Col
            xs={12}
            md={6}
            className="justify-content-center"
          >
            <Image src={props.img} fluid loading='lazy' />
          </Col>
          <Col
            xs={12}
            md={6}
            className="text-center text-lg-start"
          >
            <div className="ms-md-5">
              <h2 className="display-4 mb-4 fw-bold">{props.title}</h2>
              <p className="mb-4">{props.text}</p>
              <Button variant="light" href='/chat'>Learn More &gt;</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
