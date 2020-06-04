import React from "react";
import Button from "@material-ui/core/Button";

const CustomButton = ({icon=undefined, inverted=false, label='', onClick=undefined, style={}}) => {
  return (
    <Button
      color={'secondary'}
      children={label || ""}
      onClick={onClick}
      startIcon={icon}
      style={{
        ...style,
        borderRadius: 25,
        height: 36,
        maxWidth: 250,
      }}
      variant={inverted ? 'outlined' : 'contained'}
    />
  )
};

export default CustomButton;
