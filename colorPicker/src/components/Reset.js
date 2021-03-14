
import React from "react";

class Reset extends React.Component {
  
  onSetDefault = () => {
    this.props.onSetDefault(true);
  }
  render() {
   
      

      return (
        <a onClick={this.onSetDefault} className="btn btn-danger">Reset</a>
      );
  }
}


export default Reset;
