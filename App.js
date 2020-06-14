import React,{Component} from "react";
import FoodList from './components/FoodList'
import FoodInput from './components/FoodInput'
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
  const updateItems=[...this.state.items,newItem]
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
clearList=()=>{
  this.setState({
        items:[]
  })
}
//ลบทีละรายการ
handleDelete=(id)=>{
  const filterItems=this.state.items.filter(item=>item.id !== id)
  this.setState({
      items:filterItems
  })
}
//แก้ไขรายการ
handleEdit=(id)=>{
  const filterItems = this.state.items.filter(item=>item.id !== id)
  const selectItem = this.state.items.find(item=>item.id===id)
  // A
  // B
  this.setState({
      items:filterItems,
      item:selectItem.name,
      id:id,
      editItem:true
  })
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
    clearList={this.clearList}
    />
    </div>
  )
}
}


export default App;