import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../App.css'
import { Route } from 'react-router-dom'
import Portfolio from './Portfolio';
import Contact from './Contact'
import image from '../../src/profile.png'
import App from '../App';
import Home from './Home'


class Content extends Component {
    
    render() {
        return (
            <div>
         <Container >
        <Row>
          <Col md='2'> </Col>  
          <Col md="4" className="rcomponents">
          <Route exact path="/" component={Home}/>                  
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
           </Col>
          <Col md="4" className="mainPic">    <img src={image} />   </Col>
          <Col md='2'> </Col>  
        </Row>
        </Container>
                
            </div>
        );
    }
}

export default Content;