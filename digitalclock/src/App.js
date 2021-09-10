import React, {useState} from 'react';

const App = () => {
  const curTime = new Date().toLocaleTimeString();
  const [live, setLive] = useState(curTime)

  const UpdateTime = () => {
   let time = new Date().toLocaleTimeString();
    setLive(time);
  };
  setInterval (UpdateTime, 1000);
return(
  <>
    <h2 className="text">Current Time</h2>
  <h1 className="time">{live}</h1>

  </>
)

}

export default App;