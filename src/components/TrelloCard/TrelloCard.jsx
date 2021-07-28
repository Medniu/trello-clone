import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { updateCardInfo, changeTextColor } from "../../redux/actions";
import { colorArray } from "../../constants";
import { Draggable } from "react-beautiful-dnd";
import { TextareaAutosize, Typography, TextField, Button, Card } from "@material-ui/core";
//import Card from '@material-ui/core/Card';
//import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
//import Typography from '@material-ui/core/Typography';
//import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import Modal from "../Modal/Modal";
import "./TrelloCard.css";

const TrelloCard = ({ cardId, listId, title, text, color, cardIndex }) => {
    const [openModal, setOpenModal] = useState(false)
    const [titleValue, setTitleValue] = useState(title)
    const [description, setDescription] = useState(text)
    const [cardTextColor, setTextColor] = useState(color);
    const [isTitleChange, setIsChangeTitle] = useState(false);
    const [isTextChange, setIsTextChange] = useState(false);
    const dispatch = useDispatch();

    const saveChanges = () => {
        dispatch(updateCardInfo({ cardId, cardListId:listId, titleValue, description, cardTextColor }));
        setOpenModal(false);
    }

    const changeColor = (item) => {
        setTextColor(item);
        changeTextColor({ listId, cardId, cardTextColor });
    }

    const closeModal = () => {
        setOpenModal(false);
        setTextColor(color);
    }

    return (
        <>
            <Draggable draggableId={ String(cardId) } index={ cardIndex }>
                {provided => 
                    (
                        <div className="card" 
                                { ...provided.draggableProps }
                                { ...provided.dragHandleProps }
                                ref={ provided.innerRef }
                                onClick ={() => setOpenModal(true)}
                        >
                            <Card>
                                <Typography>
                                    { title }
                                </Typography>
                            </Card>
                        </div>
                    )
                }
            </Draggable>
            <Modal open={ openModal } onClose={() =>  closeModal()}>
                <div className="card-component">
                    {!isTitleChange ? 
                        <h4 onClick={() => setIsChangeTitle(true)}>
                            <span>
                                { title }
                            </span>
                        </h4> : 
                        <div className="title">
                            <TextField  style = {{ width : "100%"}}
                                        id="standard-basic"
                                        label="Title"
                                        defaultValue={ title }
                                        onChange={(e) => setTitleValue(e.target.value)}
                                        onBlur={() => setIsChangeTitle(false)}/>
                            <CloseIcon style={{ cursor:"pointer" }} onClick={() => setIsChangeTitle(false)}/>
                        </div>
                    }                   
                    <div className="description"> 
                        {!isTextChange ? 
                            <div style={{ width:"100%", maxWidth:"500px", minHeight: "100px",
                                        minWidth: "250px", cursor: "pointer", wordWrap:"break-word",
                                        color: cardTextColor }}
                                onClick={() => setIsTextChange(true)}>
                                {text ? text : "Click here to add description" }
                            </div>
                            :
                            <>
                                <TextareaAutosize style={{ color: cardTextColor,
                                                            width:"100%",
                                                            maxWidth: "500px",
                                                            minHeight: "100px",
                                                            minWidth: "250px",
                                                            resize:"both" }}
                                                    onBlur={() => setIsTextChange(false)}
                                                    defaultValue={ text }
                                                    placeholder="Add description..."
                                                    onChange={(e) => setDescription(e.target.value)}/>
                                <CloseIcon style={{ cursor:"pointer" }} onClick={() => setIsTextChange(false)}></CloseIcon>
                            </>
                        }                                 
                    </div>                                                                                                                        
                    <div className="color-buttons">                  
                        {colorArray.map((item) => 
                            <button   className={ cardTextColor === item ? "active" : "inactive" }
                                        key={ item }
                                        style={{ backgroundColor:item }}
                                        onClick={() => changeColor(item)}/>)
                        }                
                    </div>
                    <div className="buttons">
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            startIcon = {<SaveIcon />}
                            onClick={() => saveChanges()}
                        >
                            Save
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() =>  closeModal()}
                        >
                            Close
                        </Button>
                    </div>
                </div>            
            </Modal>    
        </>   
    );
}

export default TrelloCard;