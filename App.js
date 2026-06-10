import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [counter,setcounter] = useState(0);
  const handleonAdd = () => 
   // eslint-disable-next-line no-const-assign
   setcounter (counter+1);
    const handleonSub = () => 
   // eslint-disable-next-line no-const-assign
   setcounter(counter-1);
   const handleonReset = () => 
   // eslint-disable-next-line no-const-assign
   setcounter (0);
       

return (
  <div className="App">
    <li className="counter">{counter}</li>

    <div className="button-group">
      <button className="add-btn" onClick={handleonAdd}>
        ADD
      </button>

      <button className="sub-btn" onClick={handleonSub}>
        SUB
      </button>

      <button className="reset-btn" onClick={handleonReset}>
        RESET
      </button>
    </div>
  </div>
);
}

export default App;
