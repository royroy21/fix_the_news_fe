import React from "react";
import ButtonForModal from "../CustomButton/ButtonForModal";
import AddIcon from "@material-ui/icons/Add";
import NewsItemModal from "./NewsItemModal";


const AddNewsItemButton = ({categoryId, topic, user, smallButton=false, IconStyle={}, buttonStyle={}, label=null, buttonAsLink=false}) => {
  return (
    <ButtonForModal
      style={buttonStyle}
      buttonAsLink={true}
      icon={<AddIcon style={IconStyle} fontSize={smallButton ? 'small' : 'large'} />}
      label={label}
      Modal={NewsItemModal}
      modelProps={{
        categories: topic.serialized_categories,
        topicId: topic.id,
        categoryId: categoryId,
      }}
    />
  )
}

export default AddNewsItemButton
