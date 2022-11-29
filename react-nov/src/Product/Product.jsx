import React, { Component } from 'react'

class Product extends Component {
    state = {
        product: {
            product_Name: 'MOTOROLA g22 (64 GB)',
            image: 'https://rukminim1.flixcart.com/image/224/224/l1qrjbk0/mobile/d/w/h/-original-imagd8pyfk7wbdkg.jpeg?q=90',
            qty: 1,
            price: 14999
        }

    }
    incrHandler = () => {
        console.log("Test Case 123")
        this.setState({ product: { ...this.state.product, qty: this.state.product.qty + 1 } })
    }
    decrHandler = () => {
        this.setState({ product: { ...this.state.product, qty: this.state.product.qty - 1 } })
    }
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>{this.state.product.product_Name}</td>
                                    <td><img src={this.state.product.image} alt="" height="60px" /> </td>
                                    <td>{this.state.product.price}</td>
                                    <td><i className="fa fa-minus-circle" onClick={this.decrHandler} ></i> {this.state.product.qty} <i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                                    <td>{this.state.product.price * this.state.product.qty}</td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}

export default Product
