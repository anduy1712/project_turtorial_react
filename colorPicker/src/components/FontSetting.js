

import React from "react";

class FontSetting extends React.Component {
  

    changeFont = (font) => {
        font++;
        this.props.getFont(font);
        
    }
    test = (font) =>{
        font--;
        this.props.getFont(font);

    }
  render() {
   
      

      return (
        <div className="col-md-6">
        <nav className="navbar navbar-expand-lg navbar-light bg-success p-2">
              <h2 className="text-dark">Font size:{this.props.font}</h2>
              
          </nav>
          <div className="card">
            <div className="card-body">
                <a onClick={() => this.changeFont(this.props.font)} className="btn btn-primary m-2">Tang</a>
              <a onClick={() =>this.test(this.props.font)} className="btn btn-success">Giam</a>
            </div>
            
          </div>
          

      </div>
      );
  }
}


export default FontSetting;
