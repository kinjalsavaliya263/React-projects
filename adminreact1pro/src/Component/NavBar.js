import React from 'react'
import '../App.css';

// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
            {[false].map((expand) => (
                // e.preventDefault()
                <Navbar key={expand} bg="dark" variant='dark' expand={expand} className="mb-3 fixed-top" >
                    <Container fluid>
                        <Navbar.Brand href=" "> Products</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Products
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>

                                <Nav className="justify-content-end flex-grow-1 pe-3">

                                    <Link to="/Home" className='Link '>Home</Link>
                                    <Link to="/Addproducts" className='Link'>Add Products</Link>
                                    <Link to="/Viewproducts" className='Link'>View Products</Link>


                                    {/* <Nav.Link href="/Home" className='my-2 px-2' style={{ backgroundColor: 'lightgray' }}>Home</Nav.Link> */}
                                    {/* <Nav.Link href="/Addproducts" className='my-2 px-2' style={{ backgroundColor: 'lightgray' }}>Add Products</Nav.Link> */}
                                    {/* <Nav.Link href="/Viewproducts" className='my-2 px-2' style={{ backgroundColor: 'lightgray' }}>View Products</Nav.Link> */}

                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))
            }
        </>
    )
}
