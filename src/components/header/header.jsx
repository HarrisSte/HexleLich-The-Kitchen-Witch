import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Logo from '../../assets/logo.png';

import './header.css';

function HeaderNav() {
  return (
    <Navbar expand='lg' className='nav-bar'>
      <Container>
        <div className='logo'>
          <a href='/'>
            <img src={Logo} width={90} height={90} />
          </a>
        </div>
        <Navbar.Brand href='/about'>
          HexleLich<br></br>The Kitchen Witch
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse>
          <Nav className='nav-links'>
            <Nav.Link href='/about'>The Story...</Nav.Link>
            <Nav.Link href='/recipes'>Recipes</Nav.Link>
            <Nav.Link href='/contact'>Contact</Nav.Link>
            <NavDropdown title='Social Media' id='basic-nav-dropdown'>
              <NavDropdown.Item href='https://www.youtube.com/@hexlelich'>
                YouTube
              </NavDropdown.Item>
              <NavDropdown.Item href='https://www.twitch.com/hexlelich'>
                Twitch
              </NavDropdown.Item>
              <NavDropdown.Item href='https://www.twitter.com/hexlelich'>
                Twitter
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
