

import React from "react";

class ColorSetting extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      colors: ['red','green','blue'],
    }
  }
  showColor(color){
    return {
      backgroundColor: color,
    }
  }
  sendColor(color){
    this.props.getColor(color);
  }
  render() {

      var elementColor = this.state.colors.map((color,index) => {
        return <span 
        key={index} style={this.showColor(color)}
        onClick = {() => this.sendColor(color)}
        className={this.props.color === color ? 'active' : ''} >
        </span>
      })
      

      return (
        <div className="col-md-6 ">
                <nav className="navbar navbar-expand-lg navbar-light bg-warning p-2">
                    <h2 className="text-dark">Color Setting</h2>
                </nav>
                <div className="card">
                    <div className="card-body d-flex">
                      {elementColor}
                    </div>
                </div>
        </div>
      );
  }
}


export default ColorSetting;
