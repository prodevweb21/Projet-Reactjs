import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from 'react-bootstrap';
import Data from "../data";
import ItemCart from './itemCart';




class Modale extends Component {

    state = {
        showModal: false,
        dataModal: {
          name: ""
        }
      };
    
      getModal = data => {
        this.setState({ showModal: true, dataModal: data });
      };
    
      hideModal = () => {
        this.setState({ showModal: false });
      };
    
    render() {

          

        return (

            <div>

                <Modal show={this.props.show} onHide>

                <Modal.Header closeButton>
                    <Modal.Title>
                    </Modal.Title>

               
               </Modal.Header>
               
                          {Data.map(item  => (
                            
                            <li>Name: {item.name}***
                            descriptif: {item.descriptif}</li>
                            
                        ))}   
                 


                <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.props.onClick({ msg: 'La fenêtre va fermer!' })} >Close</Button>
                    
                </Modal.Footer>

                </Modal> 
            
            </div>
      
        )

    };
}


       
                
 
     export default Modale;