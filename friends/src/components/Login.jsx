import React, { Component } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';



class  Login extends Component {
    state = {
        credentials: {
            username:'',
            password:''
        }
    };

handleChange = e => {
    this.setState({
        credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
    });
};
login = e => {
    e.preventDefault();

    axiosWithAuth()
        .post('/api/login', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/protected');
    })
    .catch (err => console.log(err));
    
};
    render() {
    return (
        <div>
          
            <form onSubmit={this.login}>
                
                    <input
                        type='text'
                        placeholder='login'
                        name='username'
                        onChange={this.handleChange}
                        value={this.state.credentials.username}
                        />
                    <input 
                        type='password'
                        placeholder='password'
                        name='password'
                        onChange={this.handleChange}
                        value={this.state.credentials.password}
                    />
                        
                
                <button>enter</button>
            </form>

        </div>
    )
}
}
export default Login;