import { Container, Row, Col } from 'react-bootstrap';
import Gallery from '../gallery/gallery';

import './landing.css';

function Landing() {
  return (
    <Container>
      <Row className='main-banner'>
        <Col className='main-text'>
          <h1>
            Make Your Mistakes, then...
            <div className='roller'>
              <span id='roll-text'>
                Learn from them.<br></br>Work on them.
                <br></br>Eat them up.<br></br>
                <span id='site-name'>The Kitchen Witch</span>
              </span>
            </div>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col id='welcome-msg'>
          <h2>Here, recipes are guidelines & you make the rules.</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            assumenda temporibus non eum animi in, molestiae ab quo rem quasi
            nobis quos expedita voluptatum aliquam velit eos accusantium fugiat
            obcaecati esse ducimus ullam aliquid. Porro illum similique
            accusamus eveniet aliquid. Dolor eligendi voluptate iusto ratione
            earum eius repudiandae autem quis.
          </p>
        </Col>
      </Row>
      <Row>
        <Col id='gallery'>
          <Gallery />
        </Col>
      </Row>
      <Row>
        <Col id='recipes'>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            assumenda temporibus non eum animi in, molestiae ab quo rem quasi
            nobis quos expedita voluptatum aliquam velit eos accusantium fugiat
            obcaecati esse ducimus ullam aliquid. Porro illum similique
            accusamus eveniet aliquid. Dolor eligendi voluptate iusto ratione
            earum eius repudiandae autem quis.
          </p>
        </Col>
      </Row>
      <Row>
        <Col id='recipes'>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            assumenda temporibus non eum animi in, molestiae ab quo rem quasi
            nobis quos expedita voluptatum aliquam velit eos accusantium fugiat
            obcaecati esse ducimus ullam aliquid. Porro illum similique
            accusamus eveniet aliquid. Dolor eligendi voluptate iusto ratione
            earum eius repudiandae autem quis.
          </p>
        </Col>
      </Row>
      <Row>
        <Col id='recipes'>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            assumenda temporibus non eum animi in, molestiae ab quo rem quasi
            nobis quos expedita voluptatum aliquam velit eos accusantium fugiat
            obcaecati esse ducimus ullam aliquid. Porro illum similique
            accusamus eveniet aliquid. Dolor eligendi voluptate iusto ratione
            earum eius repudiandae autem quis.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
