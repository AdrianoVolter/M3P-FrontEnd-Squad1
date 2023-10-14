import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import "./header.css"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


function Header({ children }) { 
  return (
    <>
      <Navbar expand={"lg"} className="navbar mb-3">
        <Container fluid>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src="/public/logo1.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}            
          </Navbar.Brand>
          <Navbar.Brand href="#" className="text-left">Express Pharmacy</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-false`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                Admin
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link className="nav-link text-light" to="/">
                  Dashboard
                </Link>
                <Link className="nav-link text-light" to="/vendas">
                  Vendas
                </Link>
                <Link className="nav-link text-light" to="/registro-produtos">
                  Produtos
                </Link>
                <Link className="nav-link text-light" to="/registro-usuarios">
                  Usuários
                </Link>                
                {/* <NavDropdown
                  title="Mais opções"
                  id={`offcanvasNavbarDropdown-expand`}
                >
                  <Link className="nav-link" to="/">
                    Dashboard
                  </Link>
                  <NavDropdown.Divider />
                  <Link className="nav-link" to="/">
                    Dashboard
                  </Link>
                </NavDropdown> */}
                {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Item Buscado"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Buscar</Button>
                </Form>               */}                
                <Link className="nav-link text-light divider" to="/">
                  Sair
                </Link>
              </Nav>                            
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {children}
    </>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
