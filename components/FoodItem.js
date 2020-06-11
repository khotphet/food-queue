import React, {Component} from "react";

export default class FoodItem extends Component{
  render(){
       const {name, handleEdit, handleDelete}= this.props
    return(
        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        
        <h6>{name}</h6>       
        <div>

        <span onClick={this.handleEdit}><i className="fas fa-edit"></i></span>
        <span onClick={this.handleDelete}><i className="far fa-trash-alt"></i></span>
        </div>
        </li>
    )
  }
}