
import {useState} from 'react'
import './App.css';
import Item from './Item'

function App() {

  const [monState, setMonState] = useState(10);

  const modifyState = () => {
    setMonState(20);
  }

  return (
    <div className="App">
      <h1>Hello state : {monState}</h1>
      <button onClick={modifyState}>Change state </button>

      <Item txt={"txt"} />
      <Item txt={"txt2"} />
      <Item number={monState} />
    </div>
  );
}

export default App;
