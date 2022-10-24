import React from 'react';
import { ListGroup,  Row, Col } from 'react-bootstrap';
import Modalka from '../Modal/Modal';

const User = ({user}: any) => {
  
  return (
    <ListGroup className='container mt-4 lists'>
      {
        // eslint-disable-next-line array-callback-return
        user?.map((user: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
          return (
            
            <ListGroup.Item>
              <Row>
                <Col xs={4}>{user.name}</Col>
                <Col xs={7}>
                  
                </Col>
                <Col xs={1}>
                  <Modalka userName={user.name}/>
                </Col>
              </Row>
            </ListGroup.Item>
          )
        })
      }
    </ListGroup>
  )
}

export default User;