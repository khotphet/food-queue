import React,{Component} from "react";
import logo from './logo.svg';
import './style.css';
import FoodList from './components/FoodList'
import FoodInput from './components/FoodInput'
import FoodItem from './components/FoodItem'
import uuid from "uuid";




class App extends Component{
    state={
    items:[{id:1, name: "กระเพราไก่"},{id:2,name:"ผัดคะน้า"}],
    id:uuid(),
    item:"",
    editItem:false

  }
handleSunmit=(e)=>{
  console.log("Submit Data")
}


  render(){
  return(
    <div className="container">
    <h2>Food name Application</h2>
    <div className="row">
    
    <FoodInput handleSunmit={this.handleSunmit}/>
    </div>
    <FoodList/>
    </div>
  )
}
}


export default App;