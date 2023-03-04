
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" className="fixed-top" style={{borderBottom: '2px solid white'}}>
                <Container>
                    <Nav className="mx-auto" style={{display: 'flex'}}>
                        <Nav.Link className="nav-link-bold mr-5" href="#home" style={{color: 'white', marginLeft: '5rem' }}>HOME</Nav.Link>
                        <Nav.Link className="nav-link-bold mr-5" href="#store" style={{color: 'white',  marginLeft: '5rem'}}>STORE</Nav.Link>
                        <Nav.Link className="nav-link-bold mr-5" href="#about"  style={{color: 'white',  marginLeft: '5rem'}}>ABOUT</Nav.Link>
                    </Nav>
                    <Button variant="dark"
                    style={{border: '2px solid aqua', padding: '2px 17px 5px 17px', marginRight:'-30px', borderRadius: '10px'}}>cart</Button>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
