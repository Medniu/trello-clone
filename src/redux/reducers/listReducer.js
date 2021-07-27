import { ACTION_TYPE } from "../../constants";

const INITIAL_STATE = {
    list: [
            {
                id: 0,
                title:"First column",
                cards: [
                    {
                        id:0,
                        title:"some Titl from Card1",
                        text:"some Text from Card1",
                        color:"black"
                    },
                    {
                        id:1,
                        title:"some Titl from Card2",
                        text:"some Text from Card2",
                        color:"black"
                    },
                    {
                        id:2,
                        title:"some Titl from Card3",
                        text:"some Text from Card3",
                        color:"black"
                    },
                ]        
            },
            {
                id: 1,
                title:"Second column",
                cards: [
                    {
                        id:3,
                        title:"some Titl from Card4",
                        text:"some Text from Card4",
                        color:"black"
                    },
                    {
                        id:4,
                        title:"some Titl from Card5",
                        text:"some Text from Card5",
                        color:"black"
                    },
                ]        
            }
        ]
} 

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_LIST:
        const newColumn = {
            id: state.list.length,
            title: "Default Title",
            cards:[]
        }

        return {...state, list:[...state.list, newColumn]}

    case ACTION_TYPE.ADD_CARD:
        const { listId, cardTitle, cardDescription, textColor } = action.payload;

        const list = state.list.find((column) => column.id === listId);
        const listID = state.list.reduce((accumulator, currentValue) => accumulator + currentValue.cards.length, 0);

        list.cards.push({ id: listID, title: cardTitle, text: cardDescription, color: textColor });

        return {...state, list: [...state.list]}

    case ACTION_TYPE.SAVE_CARD_INFO:
        const { cardId, cardListId, titleValue, description, cardTextColor } = action.payload;

        const card = state.list.find((list) => list.id === cardListId)
                            .cards.find((card) => card.id === cardId);

        if(card){
            card.title = titleValue;
            card.text = description;
            card.color = cardTextColor;
        }

        return { ...state, list: [...state.list]};

    case ACTION_TYPE.UPDATE_LIST_TITLE:

        const updatedList = state.list.find((list) => list.id === action.payload.id);

        updatedList.title = action.payload.newTitle;

        return {...state, list:[...state.list]}
    
    case ACTION_TYPE.CHANGE_COLOR:

        const updatedCard = state.list.find((list) => list.id === action.payload.listId)
                                    .cards.find((card) => card.id === action.payload.cardId);

        updatedCard.color = action.payload.cardTextColor;

        return  {...state, list:[...state.list]}

    case ACTION_TYPE.DRAG_CARD:
        const { draggableIdStart, draggableIdEnd, draggableIndexStart, draggableIndexEnd, draggableId } = action.payload;

        if(draggableIdStart === draggableIdEnd){
            const list = state.list.find((list) => list.id === parseInt(draggableIdStart))
            const card = list.cards.splice(parseInt(draggableIndexStart), 1);
            list.cards.splice(parseInt(draggableIndexEnd), 0, ...card);
        }

        if (draggableIdStart !== draggableIdEnd) {

            const listStart = state.list[draggableIdStart];
            const card = listStart.cards.splice(parseInt(draggableIndexStart), 1);
            const listEnd = state.list[draggableIdEnd];
    
            listEnd.cards.splice(parseInt(draggableIndexEnd), 0, ...card);
        }

        return { ...state, list:[...state.list] };

    default:
        return state;
  }
};

export default listReducer;