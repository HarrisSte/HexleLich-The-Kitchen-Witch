//Importing necessary files for the footer.
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import '../footer/footer.css';

function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  return (
    <footer>
      <Row className='footer'>
        <Col
          xs='auto'
          className={`text-center ${
            hoveredIcon === 'envelope' ? 'hovered' : ''
          }`}
          onMouseEnter={() => handleIconHover('envelope')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <a
            className='bi bi-github'
            href=''
            target='_blank'
            rel='noopener noreferrer'
          ></a>
        </Col>
        <div className='copyright'>&copy; S.Harris | 2023</div>
      </Row>
    </footer>
  );
}

export default Footer;
