import { useDispatch, useSelector } from "react-redux";
import { ADD_LIST_BUTTON, BACKGROUND_IMAGE } from "./constants/index";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TrelloList from './components/TrelloList/TrelloList';
import AddItemButton from './components/AddItemButton/AddItemButton';
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

//нужные иконки 
//дождь
import OpacityIcon from '@material-ui/icons/Opacity';
//облака
import CloudIcon from '@material-ui/icons/Cloud';
//ландшафт
import LandscapeIcon from '@material-ui/icons/Landscape';
//дефолт
import ListIcon from '@material-ui/icons/List';

import './App.css';
import { moveCard } from "./redux/actions";
import DropDown from "./components/DropDawn/DropDawn";

const imageArray = [{image:BACKGROUND_IMAGE.DEFAULT, text:"Trello" },
                    {image:BACKGROUND_IMAGE.CLOUDS, text:"Clouds" },
                    {image:BACKGROUND_IMAGE.RAIN, text:"Rain" },
                    {image:BACKGROUND_IMAGE.LANDSCAPE, text:"Landscape" }]

const App = () => {
  const [backgroundImage, setBackgroundImage] = useState(BACKGROUND_IMAGE.DEFAULT)
  const dispatch = useDispatch();
  const trelloList = useSelector((state) => state.list.list);
  console.log(backgroundImage);

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    if(!destination){
      return;
    }
    dispatch(moveCard(source.droppableId, destination.droppableId, source.index, destination.index, draggableId, type));
  }

  return (
      <div className="App" style={{backgroundImage:"url(" + backgroundImage + ")"}}>
        <div className="header-container" style={{display:"flex", flexDirection:"row", justifyContent:"space-between" }}>
          <div style={{marginLeft:"20px"}}>
            <h2>Trello</h2>
          </div>
          <div style={{display:"flex", flexDirection:"row"}}>
            <span style={{color:"white", fontSize:"30px"}}>Theme :</span>
            <div style={{margin:"0px 30px"}}>
            <DropDown
                      currentValue={backgroundImage}
                      optionalList={imageArray}
                      changeSortType={setBackgroundImage}
                    />
            </div>
          </div>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {provided => (
            <div className="column-container" { ...provided.droppableProps } ref={ provided.innerRef }>
              {
                trelloList.map((list, index) => <TrelloList key = { list.id }
                                                            listID = { list.id }
                                                            title = { list.title } 
                                                            cards = { list.cards }
                                                            index = { index } />)
              }
              {provided.placeholder}
              <AddItemButton typeOfItem = { ADD_LIST_BUTTON }/>
            </div> )}
          </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
