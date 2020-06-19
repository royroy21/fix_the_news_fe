import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const CloseButton = ({onClick, style={}}) => {
  return (
    <IconButton
      color={"secondary"}
      onClick={onClick}
      style={{
        padding: 0,
        ...style,
      }}
    >
      <CloseIcon
        fontSize={"medium"}
        style={{
          padding: 0,
        }}
      />
    </IconButton>
  )
};

export default CloseButton;
