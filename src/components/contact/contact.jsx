import { Container, Row, Col } from 'react-bootstrap';
import oopsMsg from '../../assets/oops404.jpg';

import './contact.css';

function Contact() {
  return (
    <Container>
      <Row className='oops-msg'>
        <Col>
          <img src={oopsMsg}></img>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
