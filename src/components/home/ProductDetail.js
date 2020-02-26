import React, { Component } from 'react'

class ProductDetail extends Component {
    render() {
        console.log(this.props.product);
        return (
            <div>
                { this.props.product ?
                <p>
                    Name : {this.props.product.name}<br />
                    Description : {this.props.product.description}<br />
                    Harga : Rp. {this.props.product.price}
                </p>
                :
                <p>
                    Cart
                </p>
                }
            </div>
        )
    }
}

export default ProductDetail;