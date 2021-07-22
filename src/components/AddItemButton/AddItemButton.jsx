import React, {useState} from "react"

import "./AddItemButton.css";
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import AddIcon from '@material-ui/icons/Add';
import Modal from '../Modal/Modal';

const AddItemButton = ({ typeOfItem }) => {
    const [openModal, setOpenModal] = useState(false);
    const onCreateItem = () =>{
        setOpenModal(true);
        console.log(typeOfItem);
    }
    
    return (
        <>
        <div className={typeOfItem} onClick = { ()=> onCreateItem() }>
            <AddIcon/>
            <p>{"Add another " + typeOfItem}</p>
        </div>
         <Modal open={openModal} onClose={() => setOpenModal(false)}>
            <div className="card-component">
                <div className="title">
                    <TextField id="standard-basic" label="Title"/>
                </div>
                <div className="description"> 
                    <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Add a description..."/>
                </div>
                <div className="color">
                    {"Сolor Picker"};
                </div>
                <div className="buttons">
                    <button>
                        Add
                    </button>
                    <button>
                        Close
                    </button>
                </div>
            </div>
            
         </Modal>
        </>
    );
}

export default AddItemButton;