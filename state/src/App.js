import logo from './logo.svg';
import './App.css';

import React from "react";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: [
        {
          name: 'Nike air force 1',
          price:'19000',
          status: true,
        },
        {
          name: 'Coverse 1970s',
          price:'200',
          status: false,
        },
        {
          name: 'Jordan 1',
          price:'100',
          status: true,
        },
        {
          name: 'Nike rrrrose',
          price:'200',
          status: true,
        },
      ],
      isActive: true,
    }
  }
  


  activeTable = () => {
    
      this.setState({
        isActive: !this.state.isActive
      })
      var result = 'rong';
      if(this.state.isActive)
      {
        result = this.state.products.map((item,index) => {
              
          return item.status ? <tr key={index}>
          <th scope="row">{index}</th>
          <td>{item.name}</td>
          <td>
            {item.price}
          </td>
         
        </tr> : '';
        });
      }
      else{
        return result;
      }
      
  }
  render() {
   
      

      return (
        <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                  <a className="navbar-brand" href="#">Hidden brand</a>
                  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                  </ul>
              
              </div>
        </nav>

    <div className="container">
        <div className="row">
                      <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    
                  </tr>
                </thead>
                <tbody>
                  
                  
                  {
                    this.activeTable
                  }
                </tbody>
              </table>
                <a className="btn btn-success" onClick={this.activeTable}>Active: {this.state.isActive ? 'true' : 'false'}</a>
            
        </div>

    </div>
        
    </div>
      );
  }
}


export default App;
