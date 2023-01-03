
import "../styles/NavigationBar.css"
import { Container, Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
    return (
        <header>
            <Navbar variant="dark" className="nav">
                <Container>
                    <Navbar.Brand href="/" className="nav-logo"><span className="text-white">REV</span><span className="text-danger">ET</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Nav className="nav-links-font">
                        <Nav.Link href="/" className="nav-links">BERANDA</Nav.Link>
                        <NavDropdown id="nav-dropdown" title="KATEGORI" menuVariant="light" className="nav-links">
                            <NavDropdown.Item href="/trending">Handphone</NavDropdown.Item>
                            <NavDropdown.Item>Laptop</NavDropdown.Item>
                            <NavDropdown.Item>Smartwatch</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="nav-links">TENTANG KAMI</Nav.Link>
                        <Nav.Link className="nav-links">KONTAK</Nav.Link>
                    </Nav>
                    <Nav>
                        <Form className="d-flex nav-container">
                            <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button variant="outline-success"><FontAwesomeIcon icon={faSearch}/></Button>
                            <Link to={"/login"}><FontAwesomeIcon icon={faUser} style={{height: "25px", margin: "5px 0 0 8px"}}/></Link>
                        </Form>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavigationBar;