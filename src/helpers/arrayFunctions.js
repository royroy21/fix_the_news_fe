
export const combineLists = (originalList, newList) => {
  /*
  * Combine two lists containing objects with ids where:
  * 1) If an object is present in both lists the object from newList
  *    will replace object in originalList.
  * 2) originalList and newList are then combined removing duplicates.
  * */
  const newListObject = {};
  for (const item of newList) {
    newListObject[item.id] = item;
  }
  const updatedOriginalList = originalList.map(item =>
    newListObject.hasOwnProperty(item.id) ? newListObject[item.id] : item);

  const updatedOriginalListIds = updatedOriginalList.map(item => item.id);
  const filteredNewList = newList.filter(item => !updatedOriginalListIds.includes(item.id));

  return [
    ...updatedOriginalList,
    ...filteredNewList,
  ]
};

export const refreshItemInList = (list, newObject) => {
  /*
  * Takes an array containing objects with id field.
  * Replaces a matching object with the newObject.
  * */
  const newList = [];
  for (const item of list) {
    if (item.id === newObject.id) {
      newList.push(newObject)
    } else {
      newList.push(item)
    }
  }
  return newList;
};
