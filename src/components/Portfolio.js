import React, { Component } from 'react';
import { Col, Row, Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';
    import Ylmu from '../ylmu.JPG'

    const Portfolio = (props) => {
        return (
        <Row>
            
          <CardDeck className="Cards">
            <Col>
            <Card className="Card">
              <CardImg top width="100%" src={Ylmu} alt="Card image cap" />
              <CardBody>
                <CardTitle>You Lift Me Up </CardTitle>
                <CardSubtitle>Motivational App</CardSubtitle>
                <CardText>Inspiration</CardText>
                <a href="https://yourtechsis.github.io/ylmu/"><Button>Button</Button></a>
              </CardBody>
            </Card>
            </Col>
            <Col>
            <Card className="Card">
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>You Lift Me Up</CardTitle>
                <CardSubtitle>Inspirational App</CardSubtitle>
                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card></Col>
            <Card className="Card">
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </CardDeck></Row>
        );
      };
      

export default Portfolio;





