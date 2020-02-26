import React, { Component, Fragment } from 'react'
import axios from 'axios'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'
import SideNav from '../layout/Sidenav'
import Product from './Product'



class Home extends Component{
    constructor (props){
        super (props)
        this.state = {
            product: [],
            selectProduct: '',
        }
    }

    onLogout(){
        localStorage.removeItem('user-id');
        localStorage.removeItem('token');
        localStorage.removeItem('isAuth');
        this.props.history.push('/login');
    }
    // Read Product
    actSelectProduct = (product) => {
        this.setState({
            selectProduct: product
        })
    }

    readProduct(){
        const authorization = localStorage.getItem('token');
        const userId = localStorage.getItem("user-id");
        axios
            .get('http://localhost:5000/product',{
                headers: {
                    "authorization": authorization,
                    "user-id": userId
                  }
            })
            .then(response => {
                this.setState({product: response.data.result})
            })
            .catch(console.log)
    }

    componentDidMount(){
        if(!localStorage.getItem('isAuth')){
            this.props.history.push('/login')
        }
        this.readProduct()
    }

    // Search Product 
    onChangeSearch = (event) => {
        const authorization = localStorage.getItem('token');
        const userId = localStorage.getItem("user-id");
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
        axios
        .get(`http://localhost:5000/product/?name=${event.target.value}`,{
            headers: {
                "authorization": authorization,
                "user-id": userId
              }
        })
        .then(response => {
            this.setState({product: response.data.result})
            
        })
        .catch(error => {
            console.log(error)
        })
    }
    

    render(){
        console.log(this.state.product)
        const showProduct = this.state.product.map((item, index) => {
            return (
                <ProductItem product={item} key={index} selectProductItem={this.actSelectProduct}/>
            )
        })

        return(
    <Fragment>
        <div>
        <nav className='navbar sticky-top navbar-expand-lg navbar-light' style={{ background: 'white' }}>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className='container'>
                <div className='col-lg-10'>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav mr-auto' style={{margin:'auto'}}>
                            <li className='nav-item' >
                                <Link className='nav-link' to='/' style={{margin: 'auto', fontFamily: 'Arial Black, Gadget, sans-serif', fontSize:'20px', padding:'10px', color: '#4285f4' }}>The Mahardika FnB</Link>
                            </li>
                        </ul>
                        <form className='form-inline my-3 my-lg-0'>
                            <input className='form-control mr-sm-2' type='text' placeholder='Search Name' aria-label='Search' onChange={this.onChangeSearch}/>
                        </form>
                    </div>
                </div>
                <div className='col-lg-2' >
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item' style={{margin:'auto'}}>
                            <Link className='nav-link' to='#'style={{margin: 'auto', fontFamily: 'Arial Black, Gadget, sans-serif',  fontSize:'20px', padding:'10px', color:'#4285f4'}}>Cart <span className='badge badge-primary badge-pill'>0</span></Link>
                        </li>
                    </ul>
                </div>
                <p>Welcome, {localStorage.getItem('name')} <Link to="#" onClick={this.onLogout.bind(this)}>Logout</Link></p>
            </div>
        </nav>
        <SideNav />
        {/* <Product product={this.state.product}/> */}
        <div className="container">
            <div className="row">
                <div className="col-lg-10">
                    <div className="row">
                    {showProduct}
                    </div>
                </div>
                <div className="col-lg-2">
                        Rencananya Cart
                </div>
                </div>
            </div>
        </div> 
    </Fragment>           
        )
    }
}
export default Home;