import { Container, Row } from 'react-bootstrap';
import './socials.css';

function Socials() {
  return (
    <Container className='socials-container'>
      <Row>
        <a href='https://www.youtube.com/@hexlelich' className='button type--A'>
          <span className='button__text'>YouTube</span>
          <div className='button__drow1'></div>
          <div className='button__drow2'></div>
        </a>
      </Row>
      <Row>
        <a href='https://www.twitch.tv/hexlelich' className='button type--A'>
          <span className='button__text'>Instagram</span>
          <div className='button__drow1'></div>
          <div className='button__drow2'></div>
        </a>
      </Row>
      <Row>
        <a
          href='https://www.twitch.tv/hexlelich'
          className='button type--A'
        >
          <span className='button__text'>Twitch</span>
          <div className='button__drow1'></div>
          <div className='button__drow2'></div>
        </a>
      </Row>
    </Container>
  );
}

export default Socials;
