import React from 'react'
import { Nav, Navbar, Container, Form, Button } from 'react-bootstrap'
// import { alignPropType } from 'react-bootstrap/esm/types'
import { LinkContainer } from 'react-router-bootstrap'

export default function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark" className='fixed-top'>
                <Container fluid>
                    <Navbar.Brand href=" ">Products</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <LinkContainer to="/Home">
                                <li className='nav-item active'>
                                    <a className='nav-link' href="action1">Home</a>
                                </li>
                                {/* <Nav.Link href="#action1">Home</Nav.Link> */}
                            </LinkContainer>

                            <LinkContainer to="/Product">
                                <li className='nav-item active'>
                                    <a className='nav-link' href="action2">Product</a>
                                </li>
                                {/* <Nav.Link href="#action2">Products</Nav.Link> */}
                            </LinkContainer>

                            <LinkContainer to="/AboutUs">
                                <li className='nav-item active'>
                                    <a className='nav-link' href="action3">AboutUs</a>
                                </li>
                                {/* <Nav.Link href="#action3">AboutUs</Nav.Link> */}
                            </LinkContainer>

                            <LinkContainer to="/LogIn">
                                <li className='nav-item active'>
                                    <a className='nav-link' href="action4">LogIn</a>
                                </li>
                                {/* <Nav.Link href="#action4">LogIn</Nav.Link> */}
                            </LinkContainer>

                            <LinkContainer to="/SignUp" >
                                <li className='nav-item active'>
                                    <a className='nav-link' href="action5">SignUp</a>
                                </li>
                                {/* <Nav.Link href="#action5">SignUp</Nav.Link> */}
                            </LinkContainer>


                        </Nav>
                        <Form className="d-flex">

                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success" className='searchbtn'>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    )
}
