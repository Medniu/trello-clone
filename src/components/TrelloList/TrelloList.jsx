import React from "react"
import AddItemButton from "../AddItemButton/AddItemButton";
import TrelloCard from "../TrelloCard/TrelloCard";
import { ADD_CARD_BUTTON } from "../../constants";
import "./TrelloList.css";

const TrelloList = ({ title, cards }) => {
    return (
        <div className="list-container">
            <h4> { title } </h4>
            <div className="cards-container">
                { cards.map(card=> <TrelloCard key={card.id} title = { card.title } text = { card.text } color = { card.color } /> )}
            </div>
            <AddItemButton typeOfItem= {ADD_CARD_BUTTON}/>
        </div>
    );
}

export default TrelloList;