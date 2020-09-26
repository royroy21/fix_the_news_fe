import React, {Fragment} from "react";
import ButtonForModal from "../CustomButton/ButtonForModal";
import AddIcon from "@material-ui/icons/Add";
import UserNotLoggedInModal from "../User/UserNotLoggedInModal";
import NewsItemModal from "./NewsItemModal";


const AddNewsItemButton = ({categoryId, topic, user, smallButton=false, style={}}) => {
  return (
    <Fragment>
      {!user.object ? (
        <ButtonForModal
          icon={<AddIcon style={style} fontSize={smallButton ? 'small' : 'large'} />}
          Modal={UserNotLoggedInModal}
        />
      ) : (
        <ButtonForModal
          icon={<AddIcon style={style} fontSize={smallButton ? 'small' : 'large'} />}
          Modal={NewsItemModal}
          modelProps={{
            categories: topic.serialized_categories,
            topicId: topic.id,
            categoryId: categoryId,
          }}
        />
      )}
    </Fragment>
  )
}

export default AddNewsItemButton
