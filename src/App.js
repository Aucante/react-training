
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
      {toggle ?
      <h1>State true</h1>
      :
      <h1>State false</h1>
      }
      <button onClick={changeState}>Change state</button>
    </div>
  );
}

export default App;
