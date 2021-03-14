import ColorSetting from './components/ColorSetting';
import FontSetting from './components/FontSetting';

import Reset from './components/Reset';
import Result from './components/Result';
import './App.css';
import React from "react";

class App extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      fontSize: 20,
      color: 'red',
    }
  }
  onSetColor = (color) => {
    this.setState({
      color: color,
    })
  }

  onSetFont = (font) => {
    this.setState({
      fontSize: font,
    })
  }
  onSetDefault = (value) =>{
    if(value){
      this.setState({
        fontSize: 20,
        color: 'red',
      })
    }
    // console.log(value);
  }
  render() {
   
  
      return (
        <div className="container">
          <div className="row mt-5">
           <ColorSetting color={this.state.color} getColor={this.onSetColor}/>
           <FontSetting font={this.state.fontSize} getFont={this.onSetFont}/>
            <Reset onSetDefault={this.onSetDefault}/>
            <Result color={this.state.color} font={this.state.fontSize} />

          </div>
        </div>
      );
  }
}


export default App;
