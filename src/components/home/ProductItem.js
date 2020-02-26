import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({ product, selectProductItem }) => {
  const selectProduct = (event) => {
    event.preventDefault()
    selectProductItem(product)
  }
  return (
    <div className='col-6 col-md-4' key={product.id} style={{ marginBottom: "10px", paddingTop: "10px", paddingBottom: "10px"}}>
      <div className='card'>
        <div className='view'>
          <img src={product.image} width={400} height={150} className='card-img-top' alt='...' />
          <div className='mask rgba-white-slight' /></div>
        <div className='card-body card-body-cascade'>
        <h8 className="pink-text pb-2 pt-1"><i className="fas fa-utensils"></i> {product.category}</h8>
          <h4 className="-text font-bold card-title" style={{color:'#4285f4'}}><strong>{product.name}</strong></h4>
          <h5 className="pb-2"><strong>Rp. {product.price}</strong></h5>
          <div style={{ float: 'right', marginTop: '-15px' }}>
            <Link to='/' className='badge badge-pill btn btn-lg btn-primary ' onClick={selectProduct}>ADD</Link>
          </div>
          <div className="card-footer mdb-white text-muted text-center mt-4 bg-white">
            Stock: {product.quantity} 
          </div>
          <button type='button' className='fa fa-fw fa-trash' style={{ fontSize: '1em', color: 'black', border: 'none', backgroundColor: 'transparent', margin:"5", opacity:"50%" }} /> 
          <button type='button' className='fa fa-fw fa-pen' style={{ fontSize: '1em', color: 'black', border: 'none', backgroundColor: 'transparent', margin:"5", opacity:"50%" }} /> 
        </div>
      </div>
    </div>
  )
}

export default ProductItem
