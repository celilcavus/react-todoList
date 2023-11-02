import { useState } from 'react';
import './style.css';

function App() {
  const [getItem, SetNewItem] = useState("");
  const [getItems, setItems] = useState([]);


  const addItem = () => {

    if (!getItem) {
      alert("Enter you items");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 10000),
      value: getItem
    }
    setItems(oldItems => [...oldItems, item]);
    SetNewItem("");
  }

  const deleteItem = (id) => {
    const newArray = getItems.filter(item => item.id !== id);
    setItems(newArray);
  }
  return (
    <div className="App">
      <h1>ToDo List App</h1>
      <input type='text' placeholder='Enter you mission' value={getItem} onChange={x => SetNewItem(x.target.value)} />
      <button onClick={() => addItem()}>Save</button>

      <ul>
        {
          getItems.map(x => {
            return (
              <li key={x.id}>{x.value} <button onClick={() => { deleteItem(x.id) }}>X</button></li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
