import React, {Component} from "react";
import FoodItem from './FoodItem'

export default class FoodList extends Component{
  render(){
    const{items,handleEdit,handleDelete}= this.props
    return(
         //แสดงแต่ละรายการ
     <ul className="list-group my-4">
     <h3>รายการอาหาร</h3>
     {items.map(item=>{
       return(
         <FoodItem key={item.id} name={item.name} />
       )
     })}
     </ul>
    )
  }
}