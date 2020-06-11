import React,{Component} from "react";
import logo from './logo.svg';
import './style.css';
import FoodList from './components/FoodList'
import FoodInput from './components/FoodInput'
import FoodItem from './components/FoodItem'
import uuid from 'react-uuid'

class App extends Component{
    state={
    items:[{id:1, name: "กระเพราไก่"},{id:2,name:"ผัดคะน้า"}],
    id:uuid(),
    item:"",
    editItem:false

  }
//เมื่อกดปุ่มบันทึกรายการ
handleSunmit=(e)=>{
  e.preventDefault();
  console.log("Submit Data")
}
//เมื่อมีการเปลี่ยนแลง textbox
handleChange=(e)=>{
  e.preventDefault();
  console.log("Data Change")
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
    <FoodList/>
    </div>
  )
}
}


export default App;