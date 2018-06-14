import React from 'react';
import { Glyphicon } from 'react-bootstrap';
// var Button = require('react-button')
// import Button from 'react-button'
import { Modal, Button, OverlayTrigger } from 'react-bootstrap';
import { FormGroup, ControlLabel, FormControl ,FieldGroup } from 'react-bootstrap'
// import * as userAPI from '../../../APIs/user'
import AES from "crypto-js/aes"
import SHA256 from "crypto-js/sha256"
var CryptoJS = require("crypto-js");

// Flux product view
class SinglePost extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            showModal: false,
           
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

    check(){

        let pass1 = SHA256(this.post_password1.value).toString();

        console.log(pass1)
        console.log(this.props.post.password)

        if (pass1 == this.props.post.password){
            let bytes1 = AES.decrypt(this.props.post.name.toString(),this.post_password1.value);
            let bytes2 = AES.decrypt(this.props.post.address.toString(),this.post_password1.value);
            let bytes3 = AES.decrypt(this.props.post.number.toString(),this.post_password1.value);

            this.props.post.name= bytes1.toString(CryptoJS.enc.Utf8);
            this.props.post.address=bytes2.toString(CryptoJS.enc.Utf8);
            this.props.post.number=bytes3.toString(CryptoJS.enc.Utf8);

            var ciphertext = CryptoJS.AES.encrypt('my message', this.post_password1.value);
 
            // Decrypt 
            var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), this.post_password1.value);
            var plaintext = bytes.toString(CryptoJS.enc.Utf8);
            
            console.log(plaintext);
            
            console.log(bytes1.toString(CryptoJS.enc.Utf8))

        }
        console.log(this.props.post.name)
        this.modalClose()

    }

  // Render product View
  render() {
    //var fav ={this.props.post.destination_categories}
    // var imagePic = (this.props.post.image == null ? 'default.png' : this.props.post.image)
    return (
      <div className="single-post">
        
        <Modal show={this.state.showModal} >
                    <Modal.Body>
                    
                        <FormControl
                        id="formControlsExample"
                        type="text"
                        label="Password"
                        placeholder="Enter your Password"
                        inputRef={(ref) => { this.post_password1 = ref }}
                        />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.modalClose}>Close</Button>
                        <Button className="button-post" onClick={this.check.bind(this)} >Check</Button>
                    </Modal.Footer>
                </Modal>

        <div>   
            <p>{this.props.post.name.toString()}</p>
            <p>{this.props.post.address.toString()}</p>
            <p>{this.props.post.number.toString()}</p>
            <Button onClick={this.modalOpen} >Show</Button>
        </div>
        {/* <div>
        <a href="#" onClick={this.modalOpen}><i className="plus"><Glyphicon glyph="plus" /></i></a>
          {/* <a href="#"><i className="pushpin"><Glyphicon glyph="pushpin" /></i></a>
          <a href="#"><i className="share-alt"><Glyphicon glyph="share-alt" /></i></a> 
        </div> */}
      </div>
    );
  }

};

module.exports = SinglePost;