import React from 'react';
import './Dashboard.css';
import axios from 'axios';
import { bindActionCreators } from 'redux';

export default class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`/api/users/fetchorders`)
            .then(res => {
                const persons = res.data;
                console.log(persons);
                this.setState({ persons });
            })
    }
   

  

    render() {
        return (
            <>
                <table>
                    <tr>
                        <th>id</th>
                        <th>orderName</th>
                        <th>orderQuantity</th>
                        <th>orderDate</th>
                        <th>orderStatus</th>
                        <th>Delete</th>

                    </tr>
                    <td>
                        {this.state.persons.map(person => <tr>{person._id}</tr>)}

                    </td>
                    <td>
                        {this.state.persons.map(person => <tr>{person.orderName} </tr>)}
                    </td>
                    <td>
                        {this.state.persons.map(person => <tr>{person.orderQuantity}</tr>)}
                    </td>
                    <td>
                        {this.state.persons.map(person => <tr>{person.orderDate}</tr>)}
                    </td>
                    <td>

                        {this.state.persons.map(person => <tr>{person.orderStatus}
                        </tr>)}
                    </td>
                    <td>
                      {this.state.persons.map(person=><tr><button onClick={()=>
                      {
                        axios.post(`/api/users/deleteorders`, {id:person._id})
                        .then(res => {
                            window.location.reload(false);
                        
                        })
                        
                      }
                    
                    }>Delete</button></tr>)}
                    </td>
                </table>

            </>
        )
    }
}