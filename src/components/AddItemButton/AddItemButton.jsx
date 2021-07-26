import React, { useState } from "react"
import { ADD_LIST_BUTTON , BLACK, colorArray } from "../../constants";
import { useDispatch } from "react-redux";
import { addList, addCard } from "../../redux/actions";
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Modal from '../Modal/Modal';
import "./AddItemButton.css";

const AddItemButton = ({ typeOfItem, listId }) => {
    const [openModal, setOpenModal] = useState(false);
    const [cardTitle, setCardTitle] = useState("SomeTitle");
    const [cardDescription, setCardDescription] = useState("Some description");
    const [textColor, setTextColor] = useState(BLACK);
    const dispatch = useDispatch();

    const onCreateItem = () => {
        if(typeOfItem === ADD_LIST_BUTTON){
            dispatch(addList())
            console.log("add new list");
            return;
        }
        setOpenModal(true);
    }

    const onAddCard = () => {     
        dispatch(addCard({ listId, cardTitle, cardDescription, textColor }))
        setOpenModal(false);
    }
    
    return (
        <>
            <div className={ typeOfItem } onClick = {() => onCreateItem()}>
                <AddIcon/>
                <p>{"Add another " + typeOfItem}</p>
            </div>
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <div className="card-component">
                    <div className="title">
                        <TextField style = {{ width: "100%", maxWidth: "500px" }} id="standard-basic" label="Title" onChange={(e) => setCardTitle(e.target.value)}/>
                    </div>
                    <div className="description"> 
                        <textarea style = {{ color: textColor }}
                                  className={ "text-area-"+textColor }
                                  placeholder="Add ..."
                                  onChange={(e) => setCardDescription(e.target.value)}></textarea>
                    </div>
                    <div className="color-buttons">
                        {colorArray.map((item) => <button   className={ textColor===item ? "active" : "inactive" }
                                                            key={ item }
                                                            style={{ backgroundColor:item }}
                                                            onClick={() => setTextColor(item)}/>)}
                    </div>
                    <div className="buttons">                       
                        <Button 
                            color="primary"
                            variant="contained"
                            onClick = {() => onAddCard()}
                        >
                            Add
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={()=>setOpenModal(false)}
                        >
                            Close
                        </Button>
                    </div>
                </div>            
            </Modal>
        </>
    );
}

export default AddItemButton;