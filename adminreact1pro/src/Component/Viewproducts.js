import React from 'react'
import NavBar from './NavBar'
import { useEffect } from 'react'
import { useState } from 'react'
import { Table } from 'react-bootstrap'
import axios from "axios";


export default function Viewproducts() {

    const [products, setProduct] = useState("")
    const [status, setStatus] = useState("")
    console.log(products);
    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = () => {
        fetch('https://myapireact.000webhostapp.com/ViewProduct.php')
            .then(res => res.json())
            .then(json => setProduct(json))
    }

    const deleteProduct = (id) => {
        fetch(`https://myapireact.000webhostapp.com/DeleteProduct.php/${id}`, {
            method: 'POST',


        })
            .then((response) => response.json())
            .then((json) => setStatus(json));
        // var conf = {
        //     'Content-type': 'application/json'
        // }
        // axios.post(`https://myapireact.000webhostapp.com/DeleteProduct.php`, { id: id }, conf).then((res) => console.log(res))
        // getProduct()
        if (status && status.status === 'success') {
            console.log('delete....');
            getProduct()
        }
    }

    return (
        <div>
            <NavBar />
            < div className='my-5'>
                <h1 style={{ textAlign: 'center' }}>Product</h1>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Table striped >
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Product Name</th>
                                        <th>Product Image</th>
                                        <th>price</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products && products.map((item) =>
                                        <tr>
                                            <td><h4>{item.id}</h4></td>
                                            <td><h5>{item.pname}</h5></td>
                                            <td style={{ padding: '10px' }}><img src={`https://myapireact.000webhostapp.com/Uploads/${item.image}`} width='150px' height='180px' alt='' /></td>
                                            <td width='100px'>$ {item.price}</td>
                                            <td>{item.description}</td>
                                            <td width='200px'>
                                                <a className='btn btn-primary mx-2 my-2' href="Edit"> Edit </a>
                                                <a className='btn btn-danger' href="javascript:void(0)" onClick={() => deleteProduct(item.id)}>Delete</a>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                                <tfoot></tfoot>
                            </Table>
                        </div>
                    </div>
                </div>

            </ div>
        </div>
    )
}
