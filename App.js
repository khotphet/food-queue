import React,{Component} from "react";
import logo from './logo.svg';
import './style.css';
import FoodList from './components/FoodList'
import FoodInput from './components/FoodInput'
import FoodItem from './components/FoodItem'




class App extends Component{
    this.state={
    items:[{id:1, "name": "กระเพราไก่"},{id:2,name:"ผัดคะน้า"}],
    
  }

  render(){
  return(
    <div className="container">
    <h2>Food name Application</h2>
    <div className="row">
    
    <FoodInput/>
    </div>
    <FoodList/>
    </div>
  )
}
}


export default App;