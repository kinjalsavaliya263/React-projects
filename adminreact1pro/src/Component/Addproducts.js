import React, { useState } from 'react'
import NavBar from './NavBar'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

export default function Addproducts() {
    const [status, setStatus] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [file, setFile] = useState("")
    // console.log(status.data);

    const AddProduct = (e) => {
        e.preventDefault()
        let formData = new FormData();
        formData.append('name', name)
        formData.append('price', price)
        formData.append('file', file)
        var conf = {
            'Content-type': 'application/json'
        }
        axios.post("https://myapireact.000webhostapp.com/AdddProduct.php", formData, conf).then((res) => setStatus(res))
        console.log(status);
    }
    return (
        <div>
            <NavBar />
            {/* <div class="container col-md-8 mt-5 py-4" style={{ border: '2px solid grey', borderRadius: '10px' }}> */}
            <div className="container my-5 py-4 justify-content-center">
                <div className="row justify-content-center py-2">
                    <div className="col-md-8">

                        <Form onSubmit={AddProduct} method="POST" encType='multipart/form-data'>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="Name" onChange={(e) => setName(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="formFileMultiple" className="mb-3">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" multiple onChange={(e) => setFile(e.target.files[0])} />
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
