import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const CustomButton = ({icon=undefined, inverted=false, label='', onClick=undefined, style={}}) => {
  return (
    icon && !label ? (
      <IconButton
        color={'secondary'}
        onClick={onClick}
        style={{
          ...style,
          padding: 6,
        }}
      >
        {icon}
      </IconButton>
    ) : (
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
  )
};

export default CustomButton;
