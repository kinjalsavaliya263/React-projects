import React from 'react'
import Header from './Header'
import { Table } from 'react-bootstrap'
import { useEffect } from 'react'
import { useState } from 'react'
// import SideBar from '../SideBar'
import './Homecss.css'



export default function Product() {

    const [products, setProduct] = useState([])
    console.log(products);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProduct(json))
    }, [])
    // products.map((item) => {
    //     console.log(item.id)
    // })
    return (
        < div >
            <Header />
            <h1 style={{ textAlign: 'center' }}>Product</h1>
            {/* <div className='containar'>
                <SideBar />
            </div> */}
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
                                {products.map((item) =>

                                    <tr>
                                        <td><h4>{item.id}</h4></td>
                                        <td><h5>{item.title}</h5></td>
                                        <td style={{ padding: '10px' }}><img src={item.image} width='150px' height='180px' /></td>
                                        <td width='100px'>$ {item.price}</td>
                                        <td>{item.description}</td>
                                        <td width='200px'>
                                            <a className='btn btn-primary mx-2 my-2' href="Edit"> Edit </a>
                                            <a className='btn btn-danger' href="Delete">Delete</a>
                                        </td>
                                    </tr>
                                )}

                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>

        </ div>
    )
}
