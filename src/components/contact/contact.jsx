import { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

import Socials from '../socials/socials.jsx';
import './contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const submit = () => {
    if (name && email && message) {
      const serviceId = 'service_sbh5mln';
      const templateId = 'template_20ys677';
      const userId = 'q7cA_ga5eGF1FNubN';
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => {
          console.log(response);
          setShowModal(true);
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });

      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Oops, all fields are required.');
    }
  };
  return (
    <Container>
      <Row className='contact-pg'>
        <Col sm={4}>
          <h2>Want to get in touch?</h2>
          <p>
            Message me directly or find me on my social media accounts!{' '}
            <br></br>
            <br></br>
            Either way, I'll be sure to get back to you as soon as possible.
          </p>
        </Col>
        <Col sm={8}>
          <div className='contact-form'>
            <input
              className='name mb-1'
              type='text'
              placeholder='First and Last Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className='email mb-1'
              type='email'
              placeholder='Your email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder='Leave your message here!'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className='contact-submit' onClick={submit}>
              Send my message!
            </button>
          </div>
        </Col>
      </Row>
      <Socials />
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Email Sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your email has been sent. We will get back to you as soon as possible.
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Contact;
