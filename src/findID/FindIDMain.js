import React, { Component } from 'react';
import axios from 'axios';
import './FindID.css';
class FindIDMain extends Component {
    state = {
        text:"",
        login:"",
        name: "",
        url:"",
        email: null,
    }
    handleChange = (e) => {
        const {value} = e.target;
        this.setState({
            ...this.state,
            text: value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.text}`)
        .then(response => {
            console.log(response.data);
            this.setState({
                text:"",
                login:response.data.login,
                name: response.data.name,
                email:response.data.email,
                url:response.data.url,

            });
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="text" placeholder="github ID" value = {this.state.text} onChange = {this.handleChange}/>
                    <button type="submit" > 추가 </button>
                    <table className="result">
                        <tbody>
                            <tr>
                                <th className="info">login</th>
                                <th>{this.state.login}</th>
                            </tr>
                            <tr>
                                <th className="info">name</th>
                                <th>{this.state.name}</th>
                            </tr>
                            <tr>
                                <th className="info">email</th>
                                <th>{this.state.email}</th>
                            </tr>
                            <tr>
                                <th className="info">url</th>
                                <th>{this.state.url}</th>
                            </tr>
                        </tbody>
                    </table>
                </form>
                
            </div>
        );
    }


}

export default FindIDMain;