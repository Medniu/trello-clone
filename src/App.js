import { useDispatch, useSelector } from "react-redux";
import { ADD_LIST_BUTTON } from "./constants/index";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TrelloList from './components/TrelloList/TrelloList';
import AddItemButton from './components/AddItemButton/AddItemButton';

import './App.css';
import { moveCard } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const trelloList = useSelector((state) => state.list.list);
  const onDragEnd = (result) => {
  
    const { destination, source, draggableId } = result;
    if(!destination){
      return;
    }
    dispatch(moveCard(source.droppableId, destination.droppableId, source.index, destination.index, draggableId));
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <div className="header-container">
          <h2>Trello</h2>
        </div>
        <div className="column-container">
          {
            trelloList.map(list=> <TrelloList key = { list.id } id = { list.id }  title = { list.title } cards = { list.cards } />)
          }
          <AddItemButton typeOfItem = { ADD_LIST_BUTTON }/>
        </div>
  
      </div>
    </DragDropContext>
  );
}

export default App;
