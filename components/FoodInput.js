import React, {Component} from "react";

export default class FoodInput extends Component{

  render(){
    const {handleSunmit} = this.props;
    return(
      <div className="card card-body my-3">
          <form onSubmit={handleSunmit}>
          <div className="form-group">
          <label>ป้อนรายการอาหาร</label>
            <input type="text" className="form-control" value=""/>
            </div>
            <input type="submit" className="btn btn-primary" value="บันทึกรายการ" />
          
          
          </form>
      </div>
    )
  }
}