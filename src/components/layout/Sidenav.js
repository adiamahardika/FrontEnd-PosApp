import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SideNav, { NavItem, NavIcon } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Sidenav extends Component {
    state = {
        name:'',
        category: 0,
        description:'',
        price: 0,
        quantity: 0,
        image:'',
        isOpen:false,
        modal:false
    }
    onCreate = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }
    onCreateImage = event => { 
            this.setState({
                image: event.target.files[0]
            })
    }
    createProduct = (event) => {
        event.preventDefault()
        const dataCreate = new FormData()
        
        dataCreate.append('name', this.state.name)
        dataCreate.append('description', this.state.description)
        dataCreate.append('price', this.state.price)
        dataCreate.append('quantity', this.state.quantity)
        dataCreate.append('category', this.state.category)
        dataCreate.append('image', this.state.image)
        console.log(this.state.category)
        console.log(dataCreate.append)

        axios
        .post('http://localhost:5000/product', dataCreate)
        .then(response => {
                console.log(response)
            })
        .catch(console.log)
    }
  render () {
    return (
      <SideNav style={{ backgroundColor: 'transparent' }}>
        <SideNav.Nav>
          <NavItem>
            <NavIcon style={{ backgroundColor: 'white' }}>
              <div className='col'>
                <div class='btn-group dropright'>
                  <button type='button' className='fa fa-fw fa-filter' style={{ fontSize: '1.75em', color: '#e91e63', display: 'block', border: 'none', backgroundColor: 'transparent', marginTop: '75px', padding: '10px' }} data-target='#sort' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' />
                  <div class='dropdown-menu'>
                    <Link class='dropdown-item' to='#'>Indonesian Food</Link>
                    <Link class='dropdown-item' to='#'>Western</Link>
                    <Link class='dropdown-item' to='#'>Chinese Food</Link>
                    <Link class='dropdown-item' to='#'>Middle Eastern</Link>
                    <Link class='dropdown-item' to='#'>Beverages</Link>
                  </div>
                </div>

                <button type='image' className='fa fa-fw fa-clipboard' style={{ fontSize: '1.75em', color: '#e91e63', display: 'block', border: 'none', backgroundColor: 'transparent', padding: '10px' }} data-toggle='modal' data-target='#' />

                {/* Add Product */}
                <button type='button' className='fa fa-fw fa-plus' style={{ fontSize: '1.75em', color: '#e91e63', display: 'block', border: 'none', backgroundColor: 'transparent', padding: '10px' }} data-toggle='modal' data-target='#createModal' />

                <div className='modal fade' id='createModal' role='dialog' aria-labelledby='createModalLabel' aria-hidden='true' style={{ marginTop: '75px' }}>
                  <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                      <div className='modal-body' align='left'>
                        <form>
                          <div className='form-group'>
                            <label htmlFor='productId' className='col-form-label' style={{ color: 'black', fontFamily: 'Arial, Gadget, sans-serif', fontSize: '20px' }}>Nama Product: </label>
                            <input name='name' id='productId' type='text' className='form-control' onChange={this.onCreate} placeholder='Name Product...' />
                          </div>
                          <div className='form-group'>
                            <label className='col-form-label' style={{ color: 'black', fontFamily: 'Arial, Gadget, sans-serif', fontSize: '20px' }}>Category: </label>
                            <select className='form-control' name='category' onChange={this.onCreate}>
                              <option value={1}>Indonesia Food</option>
                              <option value={2}>Beverages</option>
                              <option value={3}>Western</option>
                              <option value={4}>Chinese Food</option>
                              <option value={5}>Middle Eastern</option>
                            </select>
                          </div>
                          <div className='form-group'>
                            <label className='col-form-label' style={{ color: 'black', fontFamily: 'Arial, Gadget, sans-serif', fontSize: '20px' }}>Image: </label>
                            <input type='file' name='image' className='form-control' onChange={this.onCreateImage} />
                          </div>
                          <div className='form-group'>
                            <label className='col-form-label ' style={{ color: 'black', fontFamily: 'Arial, Gadget, sans-serif', fontSize: '20px' }}>Description </label>
                            <input name='description' type='text' className='form-control' onChange={this.onCreate} placeholder='Description Product...' />
                          </div>
                          <div className='form-group'>
                            <label className='col-form-label ' style={{ color: 'black', fontFamily: 'Arial, Gadget, sans-serif', fontSize: '20px' }}>Price: </label>
                            <input name='price' type='text' className='form-control' onChange={this.onCreate} placeholder='Price Product...' />
                          </div>
                          <div className='form-group'>
                            <label className='col-form-label ' style={{ color: 'black', fontFamily: 'Arial, Gadget, sans-serif', fontSize: '20px' }}>Quantity: </label>
                            <input name='quantity' type='text' className='form-control' onChange={this.onCreate} placeholder='Quantity Product...' />
                          </div>
                        </form>
                      </div>
                      <div className='modal-footer'>
                        <button type='button' className='btn btn-secondary' data-dismiss='modal'>Cancel</button>
                        <button type='submit' className='btn btn-primary' data-dismiss='modal'onClick={this.createProduct}> Add Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </NavIcon>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    )
  }
}

export default Sidenav
