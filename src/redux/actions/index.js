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

const moveCard = (draggableIdStart, draggableIdEnd ,draggableIndexStart, draggableIndexEnd, draggableId, type) => ({
  type: ACTION_TYPE.DRAG_CARD,
  payload: {
    draggableIdStart,
    draggableIdEnd ,
    draggableIndexStart,
    draggableIndexEnd,
    draggableId,
    type
  }
});



export { addList, addCard, updateCardInfo, updateListTitle, changeTextColor, moveCard };