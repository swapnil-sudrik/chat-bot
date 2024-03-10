import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../sciastra.png'
import { Col, Form, Row } from 'react-bootstrap';

function MenuBar() {
    return (
        <Navbar expand="lg" fixed='top' className='nav-container'>
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto w-100" style={{textAlign:'center' , alignItems:'center', justifyContent:'center'}} >
                        <Nav.Link href="#home" style={{ color: 'white', padding: '5px 22px' }}>Research Institutes</Nav.Link>
                        <Nav.Link href="#home" style={{ color: 'white', padding: '5px 22px' }}>Courses</Nav.Link>
                        <Nav.Link href="#home" style={{ color: 'white', padding: '5px 22px' }}>Selections</Nav.Link>
                        <Nav.Link href="#home" style={{ color: 'white', padding: '5px 22px' }}>Our Team</Nav.Link>
                        <Nav.Link href="#home" style={{ color: 'white', padding: '5px 22px' }}>Resources</Nav.Link>
                        <Nav.Link href="#home" style={{ color: 'white', padding: '5px 22px' }}>Contact Us</Nav.Link>

                    </Nav>

                    <Form inline>
                        <Row className='d-none d-sm-none d-md-none d-lg-block'>
                            <Col xs="auto">
                                {/* <Button className='login-btn px-5'>Login</Button> */}
                                <div className="circle-button1">Login</div>
                            </Col>
                        </Row>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MenuBar;