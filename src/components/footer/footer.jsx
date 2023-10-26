import { Row, Col } from 'react-bootstrap';
import '../footer/footer.css';

function Footer() {
  return (
    <footer>
      <div>
        <Row id='footer'>
          {/* <Col>
            <a
              className='bi bi-instagram'
              href=''
              target='_blank'
              rel='noopener noreferrer'
            ></a>
            <a
              className='bi bi-youtube'
              href='https://www.youtube.com/@hexlelich'
              target='_blank'
              rel='noopener noreferrer'
            ></a>
          </Col> */}
   
          <div className='copyright'>&copy; HexleLich 2023</div>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
