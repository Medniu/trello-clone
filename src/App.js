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
  
    const { destination, source, draggableId, type } = result;
    if(!destination){
      return;
    }
    dispatch(moveCard(source.droppableId, destination.droppableId, source.index, destination.index, draggableId, type));
  }
  return (
      <div className="App">
        <div className="header-container">
          <h2>Trello</h2>
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
