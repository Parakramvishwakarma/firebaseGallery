import React, { SetStateAction , useState } from 'react';
import { Button, Image, Modal, Icon, InputOnChangeData } from "semantic-ui-react";
import { Input } from 'semantic-ui-react'


interface UploadModalProps {
    modal: boolean;
    setModal: React.Dispatch<SetStateAction<boolean>>;
    setFile: React.Dispatch<SetStateAction<File | undefined>>;
    setComment: React.Dispatch<SetStateAction<string>>;
}

export const fileTypes: string[] = ["image/jpeg", "image/png"];


const UploadModal: React.FC<UploadModalProps> = ({modal, setModal, setFile, setComment}) => {
  
    const changeHandler = (e: any) => {
      const selected: File = e.target.files[0];
      if (selected && fileTypes.includes(selected.type)) {
        setFile(selected);
      } else {
        setFile(undefined);
      }
    };

    return (
    <Modal
        onClose={( )=> console.log("bye")}
        onOpen={() => console.log("nello")}
        open={modal}
      >
        <Modal.Header>Upload Image</Modal.Header>
        <Modal.Content >
          <Input type="file" onChange={changeHandler}></Input>
          <Input placeholder="Description..." onChange={(event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => console.log(event)}></Input>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setModal(false)}>Cancel</Button>
        </Modal.Actions>
      </Modal>
    
    )   
}

export default UploadModal;