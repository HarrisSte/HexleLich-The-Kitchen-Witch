// import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';

import foodImg1 from '../../assets/foodImg1.jpg';
import foodImg2 from '../../assets/foodImg2.jpg';
import foodImg3 from '../../assets/foodImg3.jpg';
import foodImg4 from '../../assets/foodImg4.jpg';
import foodImg5 from '../../assets/foodImg5.jpg';
import foodImg6 from '../../assets/foodImg6.jpg';

import './gallery.css';

const foodPics = [
  {
    img: foodImg1,
    title: 'Image One',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    // href: '/menu',
  },
  {
    img: foodImg2,
    title: 'Image Two',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    // href: '/menu',
  },
  {
    img: foodImg3,
    title: 'Image Three',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    // href: '/menu',
  },
  {
    img: foodImg4,
    title: 'Image Four',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    // href: '/menu',
  },
  {
    img: foodImg5,
    title: 'Image Five',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    // href: '/menu',
  },
  {
    img: foodImg6,
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
