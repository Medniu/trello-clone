import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { updateListTitle } from "../../redux/actions";
import { ADD_CARD_BUTTON } from "../../constants";
import AddItemButton from "../AddItemButton/AddItemButton";
import TrelloCard from "../TrelloCard/TrelloCard";
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import "./TrelloList.css";

const TrelloList = ({ id, title, cards }) => {
    const [newTitle, setNewTitle] = useState(title);
    const [isChangeTitle, setIsChangeTitle] = useState(false);
    const dispatch = useDispatch();

    const lostFocus = () => {
        dispatch(updateListTitle({ id, newTitle }))
        setIsChangeTitle(false);
    } 

    return (
        <div className="list-container">
            { isChangeTitle ? 
            <div className="change-title-container">
                <TextField style = {{ width: "100%", maxWidth: "500px" }}
                        defaultValue={title}
                        id="standard-basic"
                        label="Title"
                        onBlur={() => lostFocus()}
                        onChange={(e) => setNewTitle(e.target.value)}/>
                <CloseIcon onClick={() => setIsChangeTitle(false)}></CloseIcon>
            </div> 
            :
            <h4 onClick={() => setIsChangeTitle(true)}>
                <span>
                    {title}
                </span>
            </h4>}

            <div className="cards-container">
                {cards.map(card=> <TrelloCard  key = { card.id }
                                                listId = { id }
                                                cardId = { card.id }
                                                title = { card.title }
                                                text = { card.text }
                                                color = { card.color } />)}
            </div>
            <AddItemButton typeOfItem = { ADD_CARD_BUTTON } listId = { id } />
        </div>
    );
}

export default TrelloList;