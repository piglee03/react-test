import React, { Component } from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";

class FindIDMain extends Component {
    state = {
        id:""
    }
    handleChange = (e) => {
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            id: "piglee03"
          });
    }
    render() {
        const queryFindID = gql`
            query($query:String!){
                search (query: $query, type: USER, first: 1){
                edges {
                    node {
                    ... on User {
                        login
                        name
                        email
                        bio
                        url
                        company
                        location
                    }
                    }
                }
                }
            }
            `;
        

        const resultQuery = (id) => (
            <Query query={queryFindID} variables = {id}>
                {({ loading, error, data }) => {
                if (loading) return null;
                if (error) return ` ${error}`;
                return data;
                }}
            </Query>
        );
        return (
            <div>
                <form>
                    <input name="text" placeholder="github ID" value = {this.state.id} onChange = {this.handleChange}/>
                    <button type="submit" onClick={this.handleSubmit}> 추가 </button>
                </form>
                {resultQuery(this.id)}
                
            </div>
        );
    }


}

export default FindIDMain;