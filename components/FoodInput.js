import React, {Component} from "react";

export default class FoodInput extends Component{

  render(){
    const {handleSunmit,item,editItem,handleChange} = this.props;
    return(
      <div className="card card-body my-3">
          <form onSubmit={handleSunmit}>
          <div className="form-group">
          <label>ป้อนรายการอาหาร</label>
            <input type="text" className="form-control" value={item} onChange={handleChange}/>
            </div>
            <input type="submit" className="btn btn-primary" value="บันทึกรายการ" />
          
          
          </form>
      </div>
    )
  }
}