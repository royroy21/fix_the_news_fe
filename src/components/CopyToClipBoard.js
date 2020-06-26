import React, {useState} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import CustomButton from "./CustomButton";

const CopyToClipBoard = ({text}) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000)
  };

  return (
    <CopyToClipboard text={text}>
      <CustomButton
        icon={<FileCopyIcon />}
        label={copied ? "Copied to clipboard" : "Copy to clipboard"}
        onClick={handleClick}
      />
    </CopyToClipboard>
  )
};

export default CopyToClipBoard;
