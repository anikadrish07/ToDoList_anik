import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  let [todolist, setTodolist] = useState([]);

  let saveToDoList = (event) => {
    event.preventDefault();
  
    let toname = event.target.toname.value.trim(); // Trim to remove leading and trailing spaces
  
    if (!toname) {
      alert("Please enter ToDo List...");
      return; 
    }
  
    if (!todolist.includes(toname)) {
      let finalDolist = [...todolist, toname];
      setTodolist(finalDolist);
    } else {
      alert("ToDo Name Already Exists");
    }
  };
  

  let list=todolist.map((value,index) => {
    return(
      <ToDoListItems value={value} key={index} indexNumber={index} 
        todolist={todolist}
        setTodolist={setTodolist}
      />
    )
  })

  
  return (
    <div className="container">
      <h1>ToDoList App</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name='toname' />
        <button>Save</button>
      </form>

      <div  className='outerContainer'>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItems ({value,indexNumber,todolist,setTodolist}) {
  let [status,setStatus] = useState(false);

  let deleteRow = () => {
    let finalData=todolist.filter((v,i) => i != indexNumber);
    setTodolist(finalData);
  }
  
  let checkStats = () => {
    setStatus(!status);
  }
  return(
    <li className={(status)? 'completetodo': ''} onClick={checkStats}> {indexNumber+1} {value} <span onClick={deleteRow}>&times;</span></li>
  )
}
