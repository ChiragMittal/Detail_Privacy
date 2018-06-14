import React from 'react'
import ReactDOM from 'react-dom'

import { Modal, Button, OverlayTrigger } from 'react-bootstrap'
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import { Glyphicon } from 'react-bootstrap'

import Heading_Post from './heading_post'
import TextStore from '../Stores/store'
import MultiPost from './multi_post'
import FluxActions from '../Actions/index'

function getCartState() {
    return {
            showModal: false,
            // text: TextStore.getText()
     
    };
  }


class FluxDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            showModal: false,
            text: TextStore.getText()
        }
        
    }

    // getInitialState() {
    //     return getCartState();
    //   }

    modalOpen = (e) => {
        e.stopPropagation()

        this.setState({
            showModal: true
        })

    }

    modalClose = (e) => {
        if (e)
            e.stopPropagation()

        this.setState({
            showModal: false
        })
        console.log(this.state.showModal)
    }

    
    
      // Add change listeners to stores
      componentDidMount() {
        TextStore.addChangeListener(this._onChange);
       
      }
    
      // Remove change listeners from stores
      componentWillUnmount () {
        TextStore.removeChangeListener(this._onChange);
       
      }

      

    render() {


        return( 
        <div>
            <div className="icon-bar">
                <a href="#" onClick={this.modalOpen}><i className="plus"><Glyphicon glyph="plus" /></i></a>
            </div>
            
            {/* <MultiPost name={this.state.text.name} address={this.state.text.address} number={this.state.text.number} /> */}
            <MultiPost posts={this.state.text}/>
    
            <Heading_Post showModal={this.state.showModal} closeModal={this.modalClose}  />
    </div>

    
    );       
                
  
}

    _onChange() {
        this.state =getCartState();
    
      }

    

};

export default FluxDetail;