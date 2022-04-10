import { useState } from "react";
import React  from 'react';
import { Button, Dropdown, Modal } from "semantic-ui-react";


export default function ArchieveClassComponent(props) {
  const [modalOpen, SetModalOpen] = useState(false);
  
 
  const handleOpen = (e) => SetModalOpen(true);
  const handleClose = (e) => SetModalOpen(false);

 
  return (
    <>
      <Modal className="add"
        trigger={
          <Dropdown.Item onClick={handleOpen} icon="archive" text="Archive" />
        }
        open={modalOpen}
        onClose={handleClose}
        dimmer="inverted"
        size="tiny"
      >
        <Modal.Header></Modal.Header>
        <Modal.Content>
          <p>
            Are you sure you want to archive class named
            <strong></strong> ?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick
           
            color="red"
          >
            Yes
          </Button>
          <Button onClick={handleClose} color="black">
            No
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}