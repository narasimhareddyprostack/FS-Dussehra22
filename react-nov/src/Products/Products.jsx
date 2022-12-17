import React, { useState, useEffect } from 'react'
import Axios from 'axios'
const Products = () => {
    let [products, setProducts] = useState([])
    useEffect(() => {
        Axios.get('http://127.0.0.1:5000/api/products')
            .then((resp) => {
                console.log(resp.data)
                setProducts(resp.data)
            })
            .catch()
    }, []);
    return (
        <div className="container mt-4">
            <pre>{JSON.stringify(products)}</pre>
            <div className="row">
                {
                    products.length > 0 ? <>
                        {
                            products.map((product) => {
                                return <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-header">
                                            <img src={product.image} alt="" />
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-group">
                                                <li className="list-group-item">{product.name}</li>
                                                <li className="list-group-item">{product.qty}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </> : null
                }
            </div>
        </div>
    )
}

export default Products
