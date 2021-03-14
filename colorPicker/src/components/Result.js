

import React from "react";

class Result extends React.Component {
  

    chanceColor() {
        return {
            border: "1px solid " + this.props.color,
            fontSize: this.props.font + "px",
        }
    }
  render() {
   
      

      return (
        <div className="col-md-12 mt-2">
              <nav className="navbar navbar-expand-lg navbar-light bg-info p-2">
            
                    <h2 className="text-dark">Result</h2>
                    
              </nav>
              <div className="card">
                <div className="card-body" style={this.chanceColor()}>Font: {this.props.font} - Color {this.props.color}</div>
              </div>
        </div>
      );
  }
}


export default Result;
