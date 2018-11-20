import React, { Component } from 'react';
import linkedin from '../../src/001-linkedin.png'
import Google from '../../src/002-google-plus.png'
import Instagram from '../../src/003-instagram.png'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Contact extends Component {
    render() {
        return (
            <div className="Contact">
              <a href="https://www.linkedin.com/in/tori-adams-10b26988/" > <img src={linkedin} />  </a>
<a href="">   <img src={Instagram} /> </a>
<br/><br/>

 <Form>
 <FormGroup>
          <Label for="examplePassword" >Your Name</Label>
          <Input type="text" name="text" id="examplePassword" placeholder="alias" bsSize="sm"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Your Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="turkeysandwhich@gmail.com" bsSize="sm" />
        </FormGroup>
          <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" bsSize="lg"/>
        </FormGroup>
        <Button>Submit</Button>
              </Form>
            </div>
        );
    }
}

export default Contact;