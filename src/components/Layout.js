import React from 'react';
import { Container, Row, Col } from 'reactstrap'



export default function Layout(props){
    return(
<div>
        <Container>
        <Row>
        {
              props.content.map((first, i) => (
                  
                 <div xs="4" key={i}>
                 {first.applicationMain.map((second, j) =>
            <div key={j}>
              <div>{second.heading}</div>
            </div>)}
                  </div> 
                  
                
              ))
          }  
        </Row>

        {/* <Row>
        
            {
              props.content.map((first, i) => (
                 <Col xs="4" key={i}>
                    {first.componentName}
                  </Col> 
                  

              ))
          }  
      
        </Row> */}
      
      </Container>
    </div>
    )
}
    
   
   
  