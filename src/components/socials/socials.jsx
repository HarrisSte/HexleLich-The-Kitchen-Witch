import { Container, Row } from 'react-bootstrap';
import { FaYoutube, FaTwitch, FaInstagram } from 'react-icons/fa';
import './socials.css';

function Socials() {
  return (
    <Container className='socials-container'>
      <Row>
        <a
          href='https://www.youtube.com/@hexlelich'
          target='_blank'
          rel='noopener noreferrer'
          className='button type--A'
        >
          <span className='button__text'>
            <FaYoutube />YouTube
          </span>
          <div className='button__drow1'></div>
          <div className='button__drow2'></div>
        </a>
      </Row>
      <Row>
        <a
          href='https://www.twitch.tv/hexlelich'
          target='_blank'
          rel='noopener noreferrer'
          className='button type--A'
        >
          <span className='button__text'>
            <FaInstagram />Instagram
          </span>
          <div className='button__drow1'></div>
          <div className='button__drow2'></div>
        </a>
      </Row>
      <Row>
        <a
          href='https://www.twitch.tv/hexlelich'
          target='_blank'
          rel='noopener noreferrer'
          className='button type--A'
        >
          <span className='button__text'>
            <FaTwitch /> Twitch
          </span>
          <div className='button__drow1'></div>
          <div className='button__drow2'></div>
        </a>
      </Row>
    </Container>
  );
}

export default Socials;
