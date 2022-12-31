import React, { useState } from "react";
import { app } from "../firebase/config";
import ProgressBar from "./ProgressBar";

export const fileTypes: string[] = ["image/jpeg", "image/png"];

const UploadForm: React.FC = () => {
  const [file, setFile] = useState<File | undefined>();
  const [error, setError] = useState<string>("");

  const changeHandler = (e: any) => {
    const selected: File = e.target.files[0];
    if (selected && fileTypes.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(undefined);
      setError("Please select valid file type png/jpeg");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="erorr">{error}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
