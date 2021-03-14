import React from "react";
import ReactDOM from "react-dom";

class Product extends React.Component {
    


    addToCart = () => {
        console.log(this.props.name);
    }


    render() {
        return (
            <div className="col-md-3">
            <div className="card" style={{width : '18rem'}}>
                <img className="card-img-top"  alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk the cas content.</p>
                    <a href="#" className="btn btn-primary" onClick={this.addToCart}>Go somewhere</a>
                </div>
            </div>
            </div>
        );
    }
}



export default Product;
