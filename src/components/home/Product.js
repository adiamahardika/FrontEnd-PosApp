// import React, { Component } from 'react'
// import axios from 'axios'
// import ProductItem from './ProductItem'

// class Product extends Component {
//     state = {
//         selectProduct: '',
//     }
//     actSelectProduct = (product) => {
//         this.setState({
//             selectProduct: product
//         })
//     }

//     readProduct(){
//         const authorization = localStorage.getItem('token');
//         const userId = localStorage.getItem("user-id");
//         axios
//             .get('http://localhost:5000/product',{
//                 headers: {
//                     "authorization": authorization,
//                     "user-id": userId
//                   }
//             })
//             .then(response => {
//                 this.setState({product: response.data.result})
//             })
//             .catch(console.log)
//     }

//     componentDidMount(){
//         this.readProduct()
//     }
//     render(){
//         console.log(this.state.product)
//             const showProduct = this.state.product.map((item, index) => {
//                 return (
//                     <ProductItem product={item} key={index} selectProductItem={this.actSelectProduct}/>
//                 )
//             })
//         return(
//             <div>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-10">
//                         <div className="row">
//                             {showProduct}
//                         </div>
//                     </div>
//                     <div className="col-lg-2">
//                             Rencananya Cart
//                     </div>
//                     </div>
//                 </div>
//             </div> 
//         )
//     }
// }

// export default Product