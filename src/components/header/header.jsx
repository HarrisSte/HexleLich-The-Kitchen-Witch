import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../../assets/logo.png';

import './header.css';

function Header() {
  const location = useLocation();

  return (
    <Navbar expand='lg' className='nav-bar'>
      <Container>
        <div className='logo'>
          <Link to='/'>
            <img src={Logo} width={120} height={120} />
          </Link>
        </div>
        <Navbar.Brand as={Link} to='/'>
          HexleLich<br></br>
          <p>The Kitchen Witch</p>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className='ml-auto'>
            <Nav.Link
              as={Link}
              to='/'
              className={location.pathname === '/' ? 'active' : ''}
            >
              Welcome
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/about'
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/menu'
              className={location.pathname === '/recipes' ? 'active' : ''}
            >
              Recipes
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/contact'
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Nav.Link>
            <NavDropdown title='Social Media' id='basic-nav-dropdown'>
              <NavDropdown.Item href='https://www.youtube.com/@hexlelich'>
                <a>YouTube</a>
              </NavDropdown.Item>
              <NavDropdown.Item href='https://www.twitch.com/hexlelich'>
                <a>Twitch</a>
              </NavDropdown.Item>
              <NavDropdown.Item href='https://www.twitter.com/hexlelich'>
                <a>Twitter</a>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
