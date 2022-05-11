import React, { Component } from "react";
import  Modale  from "./modale";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button } from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import data from "../data";




class Counter extends Component { 


  constructor(props){
    super(props);

      this.state = {

        show:false,
        name: '',
        image: '',
        descriptif: '', 
        data:[],
        
      };
     }

  handleShow = () => {
    this.setState({
      show: true,
      name: '',
      image: '',
      descriptif: '',
      data:[],
    });
  };

  handleClose = (Modale) => {
    alert(Modale.msg);

    this.setState({
      show: false
    });
  };



  render( ) {
     
    return (
      
      <div>

          <div className="row">

         <Button onClick={this.handleShow} >
              Information sur le produit
              </Button> 
            
            <Modale
              show={this.state.show}
              onClick={this.handleClose}
              onHide={this.handleClose} />


            <div className="col-md-1">
            <span style={{ fontSize: 15 }} className={this.getBadgeClasses()}>
              {this.formatCount()}
            </span>
            </div>

      
          <div className="col-md-4">
            <button
              className="btn btn-secondary"
              onClick={() => this.props.onIncrement(this.props.counter)}
            ><i className="fa fa-plus-circle" aria-hidden="true" />
            </button>


            <button
              className="btn btn-info m-2"
              onClick={() => this.props.onDecrement(this.props.counter)}
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            ><i className="fa fa-minus-circle" aria-hidden="true" />
            </button>


            <button
              className="btn btn-danger"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            ><i className="fa fa-trash-o" aria-hidden="true" />
            </button>  

            </div>
            </div>
            </div>
     
    );
    
  }


  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };
}


export default Counter;
