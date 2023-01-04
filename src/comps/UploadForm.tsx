import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { app } from "../firebase/config";
import ProgressBar from "./ProgressBar";
import UploadModal from "./UploadModal";

const UploadForm: React.FC = () => {
  const [file, setFile] = useState<File | undefined>();
  const [uploadModal, setUploadModal] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");

  return (
    <form>
      <Button onClick={() => setUploadModal(true)}>Add Photo</Button>
      <UploadModal
        setModal={setUploadModal}
        setFile={setFile}
        setComment={setComment}
        modal={uploadModal}
      />
      <div className="output">
        {file && (
          <ProgressBar file={file} setFile={setFile} comment={comment} />
        )}
      </div>
    </form>
  );
};

export default UploadForm;
