import React from 'react'
import Header from './components/Header'
import Calendar from './components/Calendar';
import './App.scss';

function App() {
  return (
    <div>
      <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00ffdd"
  }}>
      <Header/>
      </div>
  <Calendar/>
    </div>

  )
}

export default App;

