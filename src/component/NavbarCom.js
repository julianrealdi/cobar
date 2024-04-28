import Container from 'react-bootstrap/Container';
import {useState,useEffect} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {navLinks} from '../data/index'
import { NavLink } from 'react-router-dom';

const NavbarCom = () => {
const [changeColor, setChangecolor] = useState(false);

const ChangeBackgroundColor = ()=> {
  if (window.scrollY > 10) {
    setChangecolor(true)
  }
  else {
    setChangecolor(false) 
  }
};

useEffect(() => {
    ChangeBackgroundColor();

    window.addEventListener("scroll",ChangeBackgroundColor);
  });

  return (
    <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="#home" className='fs-3 fw-bold'>Cobar.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navLinks.map((Link) => {
              return (
                <div className='nav-link text-center' key={Link.id}>
                  <NavLink to={Link.path}  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                    }end>{Link.text}</NavLink>
                </div>
              )
            })}
          </Nav>

          <div className='text-center'>
            <button className='btn btn-outline-danger rounded-1'>Join With Us</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarCom