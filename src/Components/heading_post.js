import React from 'react'
import ReactDOM from 'react-dom'
import FluxActions from '../Actions/index'
import textAPI from '../API/textAPI'

import { Modal, Button, OverlayTrigger } from 'react-bootstrap';
import { FormGroup, ControlLabel, FormControl ,FieldGroup } from 'react-bootstrap'
import AES from "crypto-js/aes"
import SHA256 from "crypto-js/sha256"
//import * as userAPI from '../APIs/user'
// Flux product view
class Heading_Post extends React.Component {

    send(e) {
        e.stopPropagation()

        let a1 = AES.encrypt(this.post_name.value.toString(),this.post_password.value);
        let b1 = AES.encrypt(this.post_address.value.toString(),this.post_password.value);
        let c1 = AES.encrypt(this.post_number.value.toString(),this.post_password.value);

        let pass = SHA256(this.post_password.value).toString();
        // console.log(a1)
        // FluxActions.addText('aaa','aaa','aaa');
        // textAPI.retrieveText('aaa','aaa','aaa');
        FluxActions.addText(a1,b1,c1,pass);
        this.props.closeModal();

       

    }

    // onhide(){
    //     onHide=this.props.closeModal.bind(this)
    // }


    // Render product View
    render() {
        console.log(this.props.showModal)
        //var imagePic = (this.props.user.image == null? 'default.png': this.props.user.image)
        return (
            <div className="static-modal">
                <Modal show={this.props.showModal} >
                    <Modal.Body>
                        {/* <FormGroup controlId="formControlsTextarea">
                            <FormControl componentClass="textarea" placeholder="Please Enter Type like Restaurant,Gaming Store" inputRef={(ref) => { this.post_text = ref }} />
                        </FormGroup> */}
                        <FormControl
                            id="formControlsType"
                            type="text"
                            label="Name"
                            placeholder="Enter your Name"
                            inputRef={(ref) => { this.post_name = ref }}
                            />
                        <br/>
                        <FormControl
                        id="formControlsExample"
                        type="text"
                        label="Address"
                        placeholder="Enter your Address"
                        inputRef={(ref) => { this.post_address = ref }}
                        />
                        <br/>
                        <FormControl
                        id="formControlsExample"
                        type="text"
                        label="Phone Number"
                        placeholder="Enter your Phone Number"
                        inputRef={(ref) => { this.post_number = ref }}
                        />
                        <br/>
                        <FormControl
                        id="formControlsExample"
                        type="text"
                        label="Password"
                        placeholder="Enter your Password"
                        inputRef={(ref) => { this.post_password = ref }}
                        />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.closeModal}>Close</Button>
                        <Button className="button-post" onClick={this.send.bind(this)} >Post</Button>
                    </Modal.Footer>
                </Modal>
            </div >
        );
    }

};

export default Heading_Post;