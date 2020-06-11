import React,{Component} from "react";
import logo from './logo.svg';
import './style.css';
import FoodList from './components/FoodList'
import FoodInput from './components/FoodInput'
import FoodItem from './components/FoodItem'
import uuid from 'react-uuid'

class App extends Component{
    state={
    items:[],
    id:uuid(),
    item:"",
    editItem:false

  }
//เมื่อกดปุ่มบันทึกรายการ
handleSunmit=(e)=>{
  e.preventDefault();
  const newItem={
    id:this.state.id,
    name:this.state.item
  }
  const updateItems=[... this.state.items,newItem]
  this.setState({
    items:updateItems,
    item:"",
    id:uuid(),
    editItem:false
  })
}
//เมื่อมีการเปลี่ยนแลง textbox
handleChange=(e)=>{
  this.setState({
    item:e.target.value
  })
}
//เคลียข้อมูล
clearList=(e)=>{
  console.log("Clear Data")
}
//ลบทีละรายการ
handleDelete=(e)=>{
  console.log("Remove Item")
}
//แก้ไขรายการ
handleEdit=(e)=>{
  console.log("Edit Item")
}


  render(){
  return(
    <div className="container">
    <h2>Food name Application</h2>
    <div className="row">
    
    <FoodInput 
    item={this.state.item}//เก็บรายการอาหารแต่ละรายการ
    handleSunmit={this.handleSunmit}
    handleChange={this.handleChange}
    editItem={this.state.editItem}//ส่งค่าไปสถานะการแก้ไข
    />
    </div>
    <FoodList 
    items={this.state.items}
    handleDelete={this.handleDelete}
    handleEdit={this.handleEdit}
    />
    </div>
  )
}
}


export default App;