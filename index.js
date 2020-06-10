import React, { Component,useState, useEffect  } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component{
  constructor(props){
  super(props);
  this.state={
    title: 'React',
    act: 0,
    index: ''

  }
}
render(){
    return (
      <div>
        
        <p>
          Start editing to see some magic happen :){arr}
        </p>
      </div>
)
     
}
}
export default App;
