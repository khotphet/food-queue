import React,{Component} from "react";
import logo from './logo.svg';
import './style.css';
import FoodList from './components/FoodList'
import FoodInput from './components/FoodInput'
import FoodItem from './components/FoodItem'




class App extends Component{
  render(){
  return(
    <div className="container">
    <div className="row">
    
    <FoodInput/>
    </div>
    <FoodList/>
    </div>
  )
}
}


export default App;