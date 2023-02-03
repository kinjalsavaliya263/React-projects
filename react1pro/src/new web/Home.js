import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
// import SideBar from '../SideBar'
import Header from './Header'
import './Homecss.css'




export default function Home() {
    const [products, setProduct] = useState([])
    console.log(products);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProduct(json))
    }, [])
    return (
        <>
            <Header />
            {/* <SideBar /> */}
            <div className="container my-2">
                <div className="row justify-content-end my-5">
                    {products.map((item) =>
                        <div className="col-md-3 mb-3" >
                            <div className="card h-100">
                                <LinkContainer to={`/Singlepage/${item.id}`}>
                                    <a href=" ">
                                        <img src={item.image} className="image card-img-top" alt="Product" height='300px' />
                                    </a>
                                </LinkContainer>

                                <div className="card-body px-2 pb-2 pt-1">
                                    <div className="d-flex justify-content-between my-1">
                                        <div>
                                            <p className="h5 text-primary">$ {item.price}</p>
                                        </div>

                                    </div>
                                    <p className="mb-0">
                                        <strong>
                                            <a href=" " className="text-secondary">{item.title}</a>
                                        </strong>
                                    </p>

                                    <div className="save d-flex justify-content-end my-2">

                                        <p className="mb-2 small text-primary">
                                            <span className="font-weight-bold">Save</span> $20.00 (16%)
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="col px-0 d-grid gap-2">
                                            <button className="btn btn-outline-primary">
                                                Add To Cart
                                                {/* <i className="fa fa-shopping-basket" /> */}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>


            </div>

        </>
    )
}
