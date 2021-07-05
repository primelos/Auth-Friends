import React, { Component } from "react";
import  axiosWithAuth  from "../utils/axiosWithAuth";
import FormData from './FormData';



class FormList extends Component{

    state ={
        friendList: []
    }
    componentDidMount(){
        this.getData();
    }
    getData = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then((response) => {
                this.setState({
                    friendList:response.data
                })
            })
            .catch((err) => console.log(err.response))
    }


    render(){
        return(
            <div>
                <FormData getData={this.getData} />
                <div>
                    {this.state.friendList.map((i) => (
                        <div key={i.id}>
                            <h2>Name: {i.name}  </h2>
                            <p>Age: {i.age}</p>
                            <p>Email: {i.email}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
export default FormList