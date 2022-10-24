import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Forma from '../Form/Form';

function Modalka({userName}: any) {

  const [show, setShow] = useState(false);
  
  const handleClose = () => {
    setShow(false)
    
  }
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Change Name
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change user name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Forma userName={userName}/> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalka;