import React from 'react';
import { Jumbotron, Button ,Container} from 'reactstrap';

function Maquina() {
  return (
    <div>
      <Jumbotron fluid className="descr-top">
          <style>
              {`.descr-top{
                   background-color: #C0C0C0;
                   heigth:30%;
              }
              
              `}
          </style>
        <Container className="text-center">
            <h1 className="display-4">maquinas</h1>
          
        </Container>    
      </Jumbotron>
    </div>
  );
};

export default Maquina;
