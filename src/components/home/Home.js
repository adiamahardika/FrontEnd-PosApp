import React, { Component, Fragment } from 'react'
import axios from 'axios'
import ProductItem from './ProductItem'
import SideNav from '../layout/Sidenav'
import Navbar from '../layout/Navbar'



class Home extends Component{
    constructor (props){
        super (props)
        this.state = {
            product: [],
            selectProduct: '',
            id:'',
            name:'',
            category: 0,
            description:'',
            price: 0,
            quantity: 0,
            image:'',
            isOpen:false,
            modal:false
        }
    }

    // Create Product
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

    // Sort Product
    sortCategory = (event) => {
        const authorization = localStorage.getItem('token')
        const userId = localStorage.getItem("user-id")
        event.preventDefault()
        this.setState({
            category: event.target.value
        })
        axios
        .get(`http://localhost:5000/product/?category=${event.target.value}`,{
            headers: {
                "authorization": authorization,
                "user-id": userId
              }
        })
        .then(response => {
            this.setState({ product: response.data.result })
        })
        .catch(error => {
            console.log(error)
        })
    }

    // Delete Product
    deleteProduct = (event) => {
        // const authorization = localStorage.getItem('token')
        // const userId = localStorage.getItem("user-id")
        // event.preventDefault()
        this.setState({
            id: event.target.value
        })
        axios
        .delete(`http://localhost:5000/product/${event.target.value}`,{
            // headers: {
            //     "authorization": authorization,
            //     "user-id": userId
            //   }
        })
        .then(response => {
            alert('Your porduct has been deleted, please reload the web!')
            this.setState({ product: response.data.result })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        console.log(this.state.product)
        const showProduct = this.state.product.map((item, index) => {
            return (
                <ProductItem product={item} key={index} selectProductItem={this.actSelectProduct} deleteProduct={this.deleteProduct}/>
            )
        })

        return(
    <Fragment>
        <div>
        <SideNav sortCategory={this.sortCategory} onCreate={this.onCreate} onCreateImage={this.onCreateImage} createProduct={this.createProduct}/>
        <Navbar onChangeSearch={this.onChangeSearch} onLogout={this.onLogout} />
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