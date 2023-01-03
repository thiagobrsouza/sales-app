import Link from "next/link";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export function Menu() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="p-3">
      <Container fluid>
        <Navbar.Brand>Sales App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto">

            <Nav.Link as={Link} href="/products">Produtos</Nav.Link>
            <Nav.Link as={Link} href="/customers">Clientes</Nav.Link>
            <Nav.Link as={Link} href="/orders">Vendas</Nav.Link>

            <NavDropdown title="Controle de usuários" id="users-dropdown">
              <NavDropdown.Item as={Link} href="/users">Usuários</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/profiles">Perfis</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}