import { ACTION_TYPE } from "../../constants";

const addList = () => ({
  type: ACTION_TYPE.ADD_LIST,
});

const addCard = (cardInfo) => ({
  type: ACTION_TYPE.ADD_CARD,
  payload: cardInfo,
});

const updateCardInfo = (cardInfo) => ({
  type: ACTION_TYPE.SAVE_CARD_INFO,
  payload: cardInfo,
});

const updateListTitle = (listInfo) => ({
  type: ACTION_TYPE.UPDATE_LIST_TITLE,
  payload: listInfo,
});

const changeTextColor = (cardInfo) => ({
  type: ACTION_TYPE.CHANGE_COLOR,
  payload: cardInfo,
});



export { addList, addCard, updateCardInfo, updateListTitle, changeTextColor };