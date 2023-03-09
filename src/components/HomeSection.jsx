import { Container, Row, Col, Image, Button } from 'react-bootstrap';

export default function HomeSection(props) {
  const order_rev = props.reverse ? 1 : 2
  const order = props.reverse ? 2 : 1

  return (
    <section className="bg-blue-custom text-light py-3">
      <Container>
        <Row className="align-items-center w-100">
          <Col
            xs={{ order: order, span: 12 }}
            md={{ order: order_rev, span: 6 }}
            className="text-center text-lg-start"
          >
            <div className="ms-md-5">
              <h2 className="display-4 mb-4 fw-bold">{props.title}</h2>
              <p className="mb-4">{props.text}</p>
              <Button variant="light">Learn More</Button>
            </div>
          </Col>
          <Col
            xs={{ order: order_rev, span: 12 }}
            md={{ order: order, span: 6 }}
            className="justify-content-center"
          >
            <Image src={props.img} fluid />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
