import React, { SetStateAction } from 'react';
import useStorage from '../hooks/useStorage';

interface ProgressBarProps  {
    file: File;
    setFile: React.Dispatch<SetStateAction<File | undefined>>;
}

const ProgressBar : React.FC<ProgressBarProps> = ({file, setFile}) => {

    return (
        <div className="Progress Bar">progress</div>
    )
}

export default ProgressBar;