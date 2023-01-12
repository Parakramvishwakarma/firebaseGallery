import React, { SetStateAction, useEffect, useState } from "react";
import {
  Button,
  Image,
  Modal,
  Icon,
  InputOnChangeData,
} from "semantic-ui-react";
import { Input } from "semantic-ui-react";
// import Modal from '@mui/material/Modal';
import { ConstructionOutlined } from "@mui/icons-material";
import { useData } from "../context/DataProvider";

interface UploadModalProps {
  modal: boolean;
  setModal: React.Dispatch<SetStateAction<boolean>>;
  setFile: React.Dispatch<SetStateAction<File | undefined>>;
  setComment: React.Dispatch<SetStateAction<string>>;
}

export const fileTypes: string[] = ["image/jpeg", "image/png"];

const UploadModal: React.FC<UploadModalProps> = ({ setFile, setComment }) => {
  const {uploadModal, setUploadModal} = useData();

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
      onClose={() => setUploadModal(false)}
      onOpen={() => setUploadModal(true)}
      open={uploadModal}
      // trigger={<Button>Add new Photo</Button>}
    >
      <Modal.Header>Upload Image</Modal.Header>
      <div>
        <Input type="file" onChange={changeHandler}></Input>
        <Input
          placeholder="Description..."
          onChange={(
            event: React.ChangeEvent<HTMLInputElement>,
            data: InputOnChangeData
          ) => console.log(event)}
        ></Input>
        Hello cunt please disaply
      </div>

      <Modal.Actions>
        <Button onClick={() => setUploadModal(false)}>Cancel</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default UploadModal;
