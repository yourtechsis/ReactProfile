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
                <Container fluid>
        <Row>
            
          <Col md="6">
          <Route exact path="/" component={Home}/>                  
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
           </Col>
          <Col md="6">    <img src={image} />   </Col>
    
        </Row>
        </Container>
                
            </div>
        );
    }
}

export default Content;