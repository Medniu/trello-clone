import { useDispatch, useSelector } from "react-redux";
import TrelloList from './components/TrelloList/TrelloList';
import AddItemButton from './components/AddItemButton/AddItemButton';
import Modal from './components/Modal/Modal.jsx';
import { ADD_LIST_BUTTON } from "./constants/index";
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const trelloList = useSelector((state) => state.list);

  console.log(trelloList);
  return (
    <div className="App">
      <div className="header-container">
        <h2>Trello</h2>
      </div>
      <div className="column-container">
        {
          trelloList.map(list=> <TrelloList key = {list.id} title = {list.title} cards = {list.cards} />)
        }
        <AddItemButton typeOfItem = {ADD_LIST_BUTTON}/>
      </div>
    </div>

  );
}

export default App;
