import React, { useState } from 'react'

const Product = () => {
    let [flag, setFlag] = useState(true)
    let [msg, setMsg] = useState("Hello")
    let [product, setProduct] = useState({ p_Name: "Canon EOS M50 Mark ", price: 25000, qty: 2, image: 'https://rukminim1.flixcart.com/image/224/224/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=90' })
    let decrHandler = () => {
        setProduct({ ...product, qty: product.qty - 1 })
    }
    return <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
                <table className="table">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>QTY</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.p_Name}</td>
                            <td><img src={product.image} height="50px" /></td>
                            <td>{product.price}</td>
                            <td> <i className="fa fa-minus-circle" onClick={decrHandler}></i> {product.qty}<i className="fa fa-plus-circle" onClick={() => {
                                setProduct({ ...product, qty: product.qty + 1 })
                            }}></i></td>
                            <td>{product.qty * product.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

export default Product
