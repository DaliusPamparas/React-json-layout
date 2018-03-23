import React, { Component } from 'react';

import data from './data/app1.json';
import content from './data/app.json';
import { Container, Row, Col } from 'reactstrap';

import { Button } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  
    render() {
     
      const heading1 = content.applicationMain.slice(0,1).map((info, j ) => {
        return (
          <div key = {j} >
           {info.data.heading}
          </div>
      
        )
      });
    
  
      const productsImages = content.applicationMain.slice(0,1).map((info1, j1 ) => {
        return (
          <Row key = {j1} >
            {info1.data.products.map((info2, i) => {
              return(
              <Col xs="3" key = {i} >
              
             <img src={process.env.PUBLIC_URL + info2.image.url} alt={info2.image.altText} className='img-responsive '/> 
    
              </Col>
            )})
            
            }
          </Row>
      
        )
      });
      const productsText = content.applicationMain.slice(0,1).map((info1, k ) => {
        return (
          <Row key = {k} >
            {info1.data.products.map((info2, k2) => {
              return(
              <Col  xs="3"  key = {k2} >
                 {info2.link.text}
              </Col>
            )})
            
            }
          </Row>
      
        )
      });

      const heading2 = content.applicationMain.slice(1,2).map((info, l ) => {
        return (
          <div key = {l} >
           {info.data.heading}
          </div>
      
        )
      });

      const productsImages2 = content.applicationMain.slice(1,2).map((info1, m ) => {
        return (
          <Row key = {m} >
            {info1.data.featuredItems.map((info2, m1) => {
              return(
              <Col xs="4" key = {m1} >
       
              <img src={process.env.PUBLIC_URL + info2.image.url} alt={info2.image.altText} className='img-responsive '/> 
              </Col>
            )})
            
            }
          </Row>
      
        )
      });
  
      const productsText2 = content.applicationMain.slice(1,2).map((info1, j ) => {
        return (
          <Row key = {j} >
            {info1.data.featuredItems.map((info2, i) => {
              return(
              <Col xs="4" key = {i} >
              <h4>{info2.title}</h4><br /> {info2.text} 
    
              </Col>
            )})
            
            }
          </Row>
      
        )
      });
  
      const contactusTitle = content.applicationMain.map((info, z ) => {
        return (
          <div key = {z} >
           {info.data.title}
          </div>
      
        )
      });

      const contactus = content.applicationMain.slice(2,3).map((info, v ) => {
        return (
          <Col xs="8" key="v" >
           {info.data.text}
          </Col>
       
        )
      });

      const contactusButton = content.applicationMain.slice(2,3).map((info, t ) => {
        return (
          <Button className="button" key="t">
             {info.data.title}
          </Button>
       
        )
      });

      return (
       <div>
         
            <Container className="space">
            <Row>
              <Col sm="12">
                <h3>{heading1}</h3>
              </Col>
            </Row>
            
            
                {productsImages}
              
                {productsText}
            
            </Container> 
        <Container fluid className="containerWide space"> 
            <Container >
            <Row>
              <Col sm="12">
              <h3>{heading2}</h3>
              </Col>
            </Row>
            {productsImages2}
            {productsText2}
            
            </Container> 
        </Container>
        <Container  fluid className="containerWide space">
            <Container className="contactField spaceBottom">
              <Row>
                <Col sm="12">
                <h3>{contactusTitle}</h3>
                </Col>
              </Row>
            <Row>
           
                {contactus}
                <Col xs="4" key="j" >
                 {contactusButton}
                </Col>
            </Row>
            
            
             </Container> 
            </Container>

      
        </div>

       
      );
    }
  }
  


export default App;
