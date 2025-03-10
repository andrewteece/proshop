import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../assets/logo.png'

const Header = () => {
  //   const navigate = useNavigate()

  //   // const logoutHandler = async () => {
  //   //   try {
  //   //     await logoutApiCall().unwrap()
  //   //     dispatchEvent(logout())
  //   //     // NOTE: here we need to reset cart state for when a user logs out so the next
  //   //     // user doesn't inherit the previous users cart and shipping
  //   //     dispatchEvent(resetCart())
  //   //     navigate('/login')
  //   //   } catch (err) {
  //   //     console.error(err)
  //   //   }
  //   // }

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img src={logo} alt='ProShop' />
            ProShop
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to='/cart'>
                <FaShoppingCart /> Cart
              </Nav.Link>

              <Nav.Link as={Link} to='/login'>
                <FaUser /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
