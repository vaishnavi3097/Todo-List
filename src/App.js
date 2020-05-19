import React, { Component } from "react";
import {TInput} from "./components/TInput";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  constructor(props) {
    super(props);
     this.state = {
    items: [],
    id: 0,
    item: "",
  };

}
  handleChange =(e)=> {
    this.setState({
      item: e.target.value
    });
  };


  handleSubmit =(e)=> {
    e.preventDefault();
    const newItem = {
           id: this.state.id,
          title: this.state.item
           };
      const updatedItems =[...this.state.items,newItem]
    this.setState({
           items: updatedItems,
            id: 1+this.state.items.length,
        });
        console.log("update",this.updatedItems)
    console.log("itemss",this.state.items)
  }

  handleDelete = (index) => {
    const deleted = [...this.state.items]
    deleted.splice(index,1);
    console.log("itemsfilet",this.state.deleted)
    this.setState({
      items: deleted
    });
    console.log("i",index)
  };

 
  render() {
    return (
      <div className="container">
         <div className="row">
         <div className="col-10 mx-auto col-md-8 mt-4">
         <h3 class="alert alert-primary" >Todo List</h3>
         <div class="input-group mb-3"></div>
          <TInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          {
            this.state.items.map((item,index) => {
            return (
              <ul class="list-group list-group-flush">
              <div key={item.index}>
          <span class="list-group-item">{item.title}
           <button class="btn btn-secondary" id="bbt" onClick={()=>this.handleDelete(index)}>remove </button> 
              </span></div>
              </ul> 
            )})}
            </div>
            </div>
            </div>
            
            )}}
     
export default App;
