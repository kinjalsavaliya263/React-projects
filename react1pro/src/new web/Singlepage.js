import React, { useEffect } from 'react'
import { useState } from 'react';
// import { Badge } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Singlepage.css'


export default function Singlepage() {
    const [products, setProduct] = useState({})
    console.log(products.image)
    let { id } = useParams()
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setProduct(json))
    }, [])
    return (
        <>
            <div className="container" style={{ padding: '50px' }} >
                <div className="row justify-content-center ">
                    <div className="left-column mx-5 my-5 justify-content-center" style={{ width: '500px' }}>
                        <img data-image="red" className="active" src={products.image} height='500px' alt='' />
                    </div>
                    <div className="right-column mx-5 my-3">
                        <div className="product-description">
                            <span>{products.category}</span>
                            <h2>{products.title}</h2>
                            <p>{products.description}</p>
                        </div>
                        <div className="product-price">
                            <span>$ {products.price}</span>
                            {/* <Badge bg="success" text="light" style={{ fontSize: '15px' }}> </Badge> */}
                        </div>
                        <div className='my-3'>
                            <a href=" " className="cart-btn">Add to cart</a>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
