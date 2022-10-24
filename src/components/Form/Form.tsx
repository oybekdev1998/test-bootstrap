import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

const Forma = ({userName}: any) => {
  const [inputValue, setInputValue] = useState(userName)
  const inputHandler = (event: { target: { value: any } }) => {
      setInputValue(event.target.value)
  }
  return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Change Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={inputValue} onChange={inputHandler} />
          
        </Form.Group>
        
      </Form>  
  )
}

export default Forma