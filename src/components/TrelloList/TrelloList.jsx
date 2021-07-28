import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { updateListTitle } from "../../redux/actions";
import { ADD_CARD_BUTTON } from "../../constants";
import { Draggable, Droppable } from "react-beautiful-dnd";
import AddItemButton from "../AddItemButton/AddItemButton";
import TrelloCard from "../TrelloCard/TrelloCard";
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import "./TrelloList.css";

const TrelloList = ({ listID, title, cards, index }) => {
    const [newTitle, setNewTitle] = useState(title);
    const [isChangeTitle, setIsChangeTitle] = useState(false);
    const dispatch = useDispatch();

    const changeTitle = () => {
        dispatch(updateListTitle({ listID, newTitle }))
        setIsChangeTitle(false);
    } 

    return (
        <Draggable draggableId = { String(listID) } index = { index } >
            {provided => (
                <div { ...provided.draggableProps } ref = { provided.innerRef } {...provided.dragHandleProps}>
                    <Droppable droppableId = { String(listID) } type="card">
                        {provided =>                 
                            <div className="list-container">
                                { isChangeTitle ? 
                                    <div className="change-title-container">
                                        <TextField style = {{ width: "100%", maxWidth: "500px" }}
                                                defaultValue={title}
                                                id="standard-basic"
                                                label="Title"
                                                onBlur={() => changeTitle()}
                                                onChange={(e) => setNewTitle(e.target.value)}/>
                                        <CloseIcon style={{cursor:"pointer"}} onClick={() => changeTitle()}></CloseIcon>
                                    </div> 
                                    :
                                    <h4 onClick={() => setIsChangeTitle(true)}>
                                        <span>
                                            {title}
                                        </span>
                                    </h4>
                                }                
                                <div className="cards-container" { ...provided.droppableProps } ref = { provided.innerRef }>
                                    {cards.map((card, index) =>
                                        <TrelloCard  key = { card.id }
                                                        listId = { listID }
                                                        cardId = { card.id }
                                                        title = { card.title }
                                                        text = { card.text }
                                                        color = { card.color }
                                                        cardIndex = {index} />
                                    )}                                    
                                </div>
                                { provided.placeholder }
                                <AddItemButton typeOfItem = { ADD_CARD_BUTTON } listId = { listID } />                    
                            </div>
                        }
                    </Droppable>
                </div>
            )}
        </Draggable>
    );
}

export default TrelloList;