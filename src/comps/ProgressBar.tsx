import React, { SetStateAction, useEffect } from "react";
import useStorage from "../hooks/useStorage";
import LinearProgress from "@material-ui/core/LinearProgress";

interface ProgressBarProps {
  file: File;
  setFile: React.Dispatch<SetStateAction<File | undefined>>;
  comment: string
}

const ProgressBar: React.FC<ProgressBarProps> = ({ file, setFile, comment}) => {
  const { progress, url } = useStorage(file, comment);
  useEffect(() => {
    if (url) {
      setFile(undefined);
    }
  }, [url, setFile]);
  return (
    <div>
      <LinearProgress variant="determinate" value={progress} style={{color: "#efb6b2" }} />
    </div>
  );
};

export default ProgressBar;
