// https://myapireact.000webhostapp.com/ViewProduct.php


// https://myapireact.000webhostapp.com/AdddProduct.php

// https://myapireact.000webhostapp.com/DeleteProduct.php/6

// fetch(`https://myapireact.000webhostapp.com/DeleteProduct.php/${id}`, {
//             method: "POST"
//         }).then(res => res.json()).then(json => setStatus(json))

//         if (status && status.status === 'success') {
//             getProduct()
//         }





// import { useEffect, useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import { LinkContainer } from 'react-router-bootstrap';
// import Header from './Header';

// function Product() {
//     const [products, SetProduct] = useState([])
//     useEffect(() => {
//         fetch('https://fakestoreapi.com/products')
//             .then(res => res.json())
//             .then(json => SetProduct(json))
//     }, [])
//     const deleteProduct = (id) => {
//         fetch(`https://fakestoreapi.com/products/${id}`, {
//             method: "DELETE"
//         })
//             .then(res => res.json())
//             .then(json => console.log(json))
//     }

//     return (

//         <>
//             <Header />

//             <div className='container-fluid'>
//                 <div className='row mt-4 mb-4'>
//                     <div className='col-md-12'>
//                         <LinkContainer to="/addproduct">
//                             <a className='btn btn-info mb-4'>ADD</a>
//                         </LinkContainer>
//                         <Table striped bordered hover >
//                             <thead>
//                                 <tr>
//                                     <th>ID</th>
//                                     <th>Title</th>
//                                     <th>Price</th>
//                                     <th>Description</th>
//                                     <th>Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>

//                                 {products.map((item) =>
//                                     <tr>
//                                         <td>{item.id}</td>
//                                         <td>{item.title}</td>
//                                         <td>{item.price}</td>
//                                         <td>{item.description}</td>
//                                         <td><img src={item.image} width="50px" /> </td>
//                                         <td>

//                                             <a className='btn btn-danger' onClick={() => deleteProduct(item.id)}> DELETE</a>
//                                         </td>
//                                     </tr>
//                                 )}


//                             </tbody>
//                         </Table>
//                     </div>
//                 </div>
//             </div>

//         </>
//     );
// }

// export default Product;