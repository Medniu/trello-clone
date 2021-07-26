import { useSelector } from "react-redux";
import { ADD_LIST_BUTTON } from "./constants/index";
import TrelloList from './components/TrelloList/TrelloList';
import AddItemButton from './components/AddItemButton/AddItemButton';
import './App.css';

const App = () => {
  const trelloList = useSelector((state) => state.list.list);

  return (
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

  );
}

export default App;
