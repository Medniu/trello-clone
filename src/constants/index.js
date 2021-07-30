const ADD_CARD_BUTTON = "cardButton" 
const ADD_LIST_BUTTON = "listButton" 

const BLACK = "black";
const GREEN = "green";
const RED = "red";
const YELLOW = "yellow";

const colorArray = [BLACK, GREEN, RED, YELLOW]; 

const ACTION_TYPE = {
    ADD_LIST: "ADD_LIST",
    ADD_CARD: "ADD_CARD",
    SAVE_CARD_INFO: "SAVE_CARD_INFO",
    UPDATE_LIST_TITLE: "UPDATE_LIST_TITLE",
    CHANGE_COLOR: "CHANGE_COLOR",
    DRAG_CARD: "DRAG_CARD"
}

const BACKGROUND_IMAGE = {
    DEFAULT: `https://static.tildacdn.com/tild3362-6431-4133-a566-386133333965/trello.svg`,
    RAIN: `https://wallpaperaccess.com/full/164284.jpg`,
    CLOUDS: `https://i.pinimg.com/originals/db/c6/0a/dbc60a7225a2853e2aa94be72febeb88.jpg`,
    LANDSCAPE: `https://cutewallpaper.org/21/trello-backgrounds/Windows-Backgrounds-Mountain-Stock-Photos-Backgroundnature-.jpg`,
}


export { ADD_CARD_BUTTON, ADD_LIST_BUTTON, BLACK, GREEN, RED, YELLOW, ACTION_TYPE, colorArray, BACKGROUND_IMAGE };