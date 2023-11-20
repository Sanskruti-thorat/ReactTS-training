
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "../CSS/navbar.style.css"; 

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/page1/">
              Form
            </Nav.Link>
            <Nav.Link as={Link} to="/page2/">
              Table
            </Nav.Link>
            <Nav.Link as={Link} to="/page3/">
              Form-bootstrap
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
