import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {increment, login} from "./actions";
import './App.css';

function App() {
  const counter = useSelector(state => state.counter)
  const logged = useSelector(state => state.logged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter: {counter} </h1>
      <button onClick={()=> dispatch(increment())}>Aumenta </button>
      {logged ? <h1> Sei Loggato  </h1>: <h1>Non sei loggato </h1>}
      <button onClick={()=> dispatch(login())}>loggati </button>
    </div>
  );
}

export default App;
