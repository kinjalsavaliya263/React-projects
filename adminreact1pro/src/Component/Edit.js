import React from 'react'
import NavBar from './NavBar'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Edit() {
    return (
        <div>
            <NavBar />
            <div className="container my-5 py-4 justify-content-center">
                <div className="row justify-content-center py-2">
                    <div className="col-md-8">

                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" placeholder="Price" />
                            </Form.Group>
                            <Form.Group controlId="formFileMultiple" className="mb-3">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" multiple />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Add
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
