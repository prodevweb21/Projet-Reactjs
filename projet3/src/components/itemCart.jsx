import React from 'react';

const ItemCart = (props) => {
    return (
        <div className="row">
            
            
            <div className="col-md-3 m-1">
            <img src={props.image} alt=""/>
            </div>

            <div className="col-md-1">
            <h5>{props.name}</h5>
            </div>

            
            
            
           
        </div>
        

        
 
    );
};

export default ItemCart;