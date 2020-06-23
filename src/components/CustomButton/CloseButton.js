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
        marginLeft: "92%",
        ...style,
      }}
    >
      <CloseIcon
        style={{
          padding: 0,
        }}
      />
    </IconButton>
  )
};

export default CloseButton;
