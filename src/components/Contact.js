import React, { Component } from 'react';
import linkedin from '../../src/001-linkedin.png'
import Google from '../../src/002-google-plus.png'
import Instagram from '../../src/003-instagram.png'


class Contact extends Component {
    render() {
        return (
            <div className="Contact">
              <a href="https://www.linkedin.com/in/tori-adams-10b26988/" > <img src={linkedin} />  </a>
               <a href=" "> <img src={Google} /></a>
<a href="">   <img src={Instagram} /> </a>


            </div>
        );
    }
}

export default Contact;