
import {useState} from 'react'
import './App.css';
import Item from './Components/Item/Item';

function App() {

  const [toggle, setToggle] = useState(true);

  const changeState = () => {
    setToggle(!toggle)
  }

  return (
    <div className="App">
      <h1>Hello state depuis App</h1>
      <button onClick={changeState}>Change state</button>
    </div>
  );
}

export default App;
