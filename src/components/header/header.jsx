import { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../../assets/logo.png';

import './header.css';

function Header() {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand='lg' className='header-outer nav-bar'>
      <Container className='header-inner responsive wrapper'>
        <div className={`logo ${isScrolled ? 'hidden' : ''}`}>
          <Link to='/'>
            <img src={Logo} width={200} height={200} alt='Logo' />
          </Link>
        </div>
        <Navbar.Brand as={Link} to='/'>
          <h2>The Kitchen Witch</h2>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className='header-navigation ml-auto'>
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
            <NavDropdown
              title='Social Media'
              show={showDropdown}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
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
