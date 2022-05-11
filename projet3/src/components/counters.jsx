import React, { Component } from "react";
import Counter from "./counter";
import Data from "../data";
import ItemCart from "./itemCart";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modale from "./modale";
import { Button, Modal } from 'react-bootstrap';



class Counters extends Component {

  

  
  render() {

      const {
      onReset,
      onIncrement,
      onDelete,
      onDecrement,
      counters,
      onRestart,
      Modale,
      
    } = this.props;



    return (

      

      <div>   

          <button
          className="btn btn-success m-3"
          onClick={onReset}
          disabled={counters.length === 0 ? "disabled" : ""}
          >
          <i className="fa fa-refresh" aria-hidden="true" />
        </button>
        
        <button
          className="btn btn-primary"
          onClick={onRestart}
          disabled={counters.length !== 0 ? "disabled" : ""}
        >
          <i className="fa fa-recycle" aria-hidden="true" />
        </button>
        

        <div className="row">
          
        <div className="col-md-4">
       

           
        {Data.map((item) => {
             
             return(

               <ItemCart 
              key={item.id}
              image={item.image}
              name={item.name}
               />
               
             ) })}
        </div>



        <div className="col-md-8">
        {counters.map((counter) => (
          <Counter
            
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete} 
          />
          
        ) ) }


      </div>
      </div>  
     </div>


     
    );
  }
}

export default Counters;
