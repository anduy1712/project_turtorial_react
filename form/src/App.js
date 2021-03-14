import logo from './logo.svg';
import './App.css';

import React from "react";

class App extends React.Component {

  constructor(){
    super();
    this.state = ({
      txtName: 'anduy1712@gmail.com',
      txtPass: '0127877857',
      txtDes: 'Hello everyone',
      sltGender: 0,
      rdLang: 'vi',
      chkbStatus: true,
    })
  }
  

  onHandleChange = (e) =>{
    const target = e.target
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }
  onHandleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);
  }
  render() {
   
      

      return (
        <div>
          
          <div className="container">
            
            <div className="row">
              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                
                <div className="panel panel-primary">
                    <div className="panel-heading">
                      <h3 className="panel-title">Panel title</h3>
                    </div>
                    <div className="panel-body">
                        
                        <form onSubmit = {this.onHandleSubmit} >
                          <legend>Form title</legend>
                        
                          <div className="form-group">
                            <label >User name:</label>
                            <input  type="text" value={this.state.txtName}  className="form-control"  name="txtName" onChange={this.onHandleChange} placeholder="Input field"/>
                          </div>
                          <div className="form-group">
                            <label >Password:</label>
                            <input type="password" value={this.state.txtPass} className="form-control"  name="txtPass" onChange={this.onHandleChange} placeholder="Input field"/>
                          </div>
                          <div className="form-group">
                            <label >Description:</label>
                            
                            <textarea name="txtDes" value={this.state.txtDes}  className="form-control" rows="3" onChange={this.onHandleChange} required="required"></textarea>
                            
                          </div>
                          <label>Gender: </label>
                          <select 
                          name="sltGender"
                           id="input" 
                           value={this.state.sltGender}
                           onChange={this.onHandleChange}
                           className="form-control" >
                            <option value={0}>Nam</option>
                            <option value={1} >Nu</option>

                          </select>
                          <label>Languages: </label>
                          
                          <div className="radio">
                            <label>
                              <input type="radio" name="rdLang"  value="vi"  onChange={this.onHandleChange} checked ={this.state.rdLang === 'vi'}/>
                              Vietnamese
                            </label>
                            <br/>
                            <label>
                              <input type="radio" name="rdLang"  value="en" onChange={this.onHandleChange} checked ={this.state.rdLang === 'en'} />
                              English
                            </label>
                          </div>
                          
                          <div className="checkbox">
                            <label>
                              <input name="chkbStatus" type="checkbox" value={this.state.chkbStatus} checked={this.state.chkbStatus === true} onChange={this.onHandleChange}/>
                              Status
                            </label>
                          </div>
                          
                          <button type="submit" className="btn btn-primary ">Save</button>
                          <button type="reset" className="btn btn-danger">Delete</button>
                        </form>
                        
                    </div>
                </div>
                
              </div>
            </div>
            
          </div>
          
        </div>
        
      );
  }
}


export default App;
