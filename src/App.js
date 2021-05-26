import react,{useState} from 'react';
import './App.css';
import Covid from './component/Covid';

function App() {
  return (
    <div className="App">
      <h2> 🔴 Live</h2>
      <h2>Covid 19 Tracker</h2>
      <Covid />
    </div>
  );
}

export default App;
