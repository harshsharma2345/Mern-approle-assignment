import './components/dashboard/Dashboard.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/dashboard/Navabr';
  import axios from 'axios';


  

export default class Addorder extends React.Component {
  state = {
    orderName: '',
    orderQuantity: '',
    orderDate:'',
    orderStatus:''
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      orderName: this.state.orderName,
      orderQuantity: this.state.orderQuantity,
      orderDate: this.state.orderDate,
      orderStatus: this.state.orderStatus
    };

    axios.post(`/api/users/addorder`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
        
      })
  }
  
  render() {
    return (
      <>
      <Navbar />
      <div className="formaddorder">
        <form onSubmit={this.handleSubmit}>
        <h1> Add New Order </h1>

 
       
       <input type="text" name="orderName" id="orderName" placeholder="orderName"  onChange={this.handleChange}/>
       <br></br><br></br>
       <input type="number" name="orderQuantity" id="orderQuantity" placeholder="orderQuantity"  onChange={this.handleChange}/>
       <br></br><br></br>
       <input type="date" name="orderDate" placeholder="orderDate"  id="orderDate" onChange={this.handleChange}/>
       <br></br><br></br>
       <input type="text" name="orderStatus" placeholder="orderStatus" id="orderStatus" onChange={this.handleChange}/>
       <br></br><br></br>
       {/* <input className="submitbutton" type="submit" value="Add Now" onChange={this.handleChange} /> */}
   
               
   
             
          
          <button className="submitbutton" type="submit" >Add</button> 
          <Link to="dashboard"><button className="submitbutton" type="submit" >All Orders</button></Link>

          <p>Check All Orders page after Clicking the Add Button</p>
        </form>
      </div>
      </>
    )
  }
}


