import React, {useState} from 'react';


const App = () => {
  const [inputList, setInputList] = useState("");

  const [toDo, setToDo] = useState([]);
  const itemEvent = (event)=> {
    setInputList(event.target.value);
  };

  const listOfItems =()=>{
    toDo.push(inputList)
    setToDo(toDo)
    setInputList("")

  };
  return ( 
  <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" value = {inputList} placeholder="Add a Items" onChange={itemEvent} />
        <button onClick={listOfItems}> + </button>

          <ol>
            {toDo.map((item,index)=>{
              return(
                <li key={index}>
                  {item}
                </li>
              )
            })}
            <li>
              
            </li>
          </ol>

      </div>
    </div>

  </>
  )};
  

export default App;
