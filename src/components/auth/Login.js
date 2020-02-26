import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    componentDidMount(){
        if(localStorage.getItem('token')){
            this.props.history.push('/');
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name] : event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log('hahaa');

        axios
            .post("http://localhost:5000/user/login", this.state)
            .then(response => {
                console.log(response.data);
                localStorage.setItem('token', response.data.result.token);
                localStorage.setItem('user-id', response.data.result.id);
                localStorage.setItem('isAuth', true);
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error);
            })
    }

    render(){
        return(
            <div className="container">
                <h4 style={{ marginTop: '10px' }}>Login</h4>
                <div className="row justify-content-md-center">
                    <div className="col-md-8">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" placeholder="Enter email" name="email" onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.onChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;