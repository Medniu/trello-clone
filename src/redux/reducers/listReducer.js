import { ACTION_TYPE } from "../../constants";

const INITIAL_STATE = {
    list: [
            {
                id: `listId-${0}`,
                title:"To Do",
                cards: [
                    {
                        id: `cardId-${0}`,
                        title:"Setup Env",
                        text:"Install Node.js, npm",
                        color:"black"
                    },
                    {
                        id: `cardId-${1}`,
                        title:"Create App",
                        text:"Create react app",
                        color:"black"
                    },
                    {
                        id:`cardId-${2}`,
                        title:"Create Rep on gitHub",
                        text:"Create Rep for project",
                        color:"black"
                    },
                ]        
            },
            {
                id: `listId-${1}`,
                title:"In progress",
                cards: [
                    {
                        id:`cardId-${3}`,
                        title:"Watch movie",
                        text:"Choose movie to watch",
                        color:"black"
                    },
                    {
                        id:`cardId-${4}`,
                        title:"Prepare dinner",
                        text:"fry potatoes with chicken",
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
            id: `listId-${state.list.length}`,
            title: "Default Title",
            cards:[]
        }

        return {...state, list:[...state.list, newColumn]}

    case ACTION_TYPE.ADD_CARD:
        const { listId, cardTitle, cardDescription, textColor } = action.payload;

        const list = state.list.find((column) => column.id === listId);
        const listID = state.list.reduce((accumulator, currentValue) => accumulator + currentValue.cards.length, 0);

        list.cards.push({ id: `cardId-${listID}`, title: cardTitle, text: cardDescription, color: textColor });

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

        const updatedList = state.list.find((list) => list.id === action.payload.listID);

        updatedList.title = action.payload.newTitle;

        return {...state, list:[...state.list]}
    
    case ACTION_TYPE.CHANGE_COLOR:

        const updatedCard = state.list.find((list) => list.id === action.payload.listId)
                                    .cards.find((card) => card.id === action.payload.cardId);

        updatedCard.color = action.payload.cardTextColor;

        return  {...state, list:[...state.list]}

    case ACTION_TYPE.DRAG_CARD:
        const { draggableIdStart, draggableIdEnd, draggableIndexStart, draggableIndexEnd, draggableId, type } = action.payload;

        if(type === "list"){
            const list = state.list.splice(draggableIndexStart, 1);
            state.list.splice(draggableIndexEnd, 0, ...list);

            return { ...state, list:[...state.list] }
        }

        if(draggableIdStart === draggableIdEnd){
            const list = state.list.find((list) => list.id === draggableIdStart)
            const card = list.cards.splice(draggableIndexStart, 1);
            list.cards.splice(draggableIndexEnd, 0, ...card);
        }

        if (draggableIdStart !== draggableIdEnd) {
            const listStart = state.list.find((list) => list.id === draggableIdStart)
            const card = listStart.cards.splice(draggableIndexStart, 1);
            const listEnd = state.list.find((list) => list.id === draggableIdEnd)
    
            listEnd.cards.splice(draggableIndexEnd, 0, ...card);
        }

        return { ...state, list:[...state.list] };

    default:
        return state;
  }
};

export default listReducer;