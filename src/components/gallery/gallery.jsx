// import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';

import foodImg from '../../assets/main-banner.jpg';
import './gallery.css';

const foodPics = [
  {
    img: foodImg,
    title: 'Image One',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    // href: '/menu',
  },
  {
    img: foodImg,
    title: 'Image Two',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    // href: '/menu',
  },
  {
    img: foodImg,
    title: 'Image Three',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    // href: '/menu',
  },
  {
    img: foodImg,
    title: 'Image Four',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    // href: '/menu',
  },
  {
    img: foodImg,
    title: 'Image Five',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    // href: '/menu',
  },
  {
    img: foodImg,
    title: 'Image Six',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    // href: '/menu',
  },
];

function Gallery() {
  return (
    <Container>
      <Row>
        {foodPics.map((foodPic, index) => (
          <Col key={index} lg={6} className='mb-3 mb-lg-0'>
            <div className='hover hover-1 text-white rounded mb-3'>
              <img src={foodPic.img} alt={foodPic.description} />
              <div className='hover-overlay'></div>
              <div className='hover-1-content px-5 py-4'>
                <h3 className='hover-1-title text-uppercase font-weight-bold mb-0'>
                  <span className='font-weight-light'>{foodPic.title}</span>
                </h3>
                <p className='hover-1-description font-weight-light mb-0'>
                  {foodPic.description}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
