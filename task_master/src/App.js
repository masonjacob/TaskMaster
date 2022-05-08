import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import './App.css';

function App() {
  return (
  <FullCalendar
  plugins={[ dayGridPlugin ]}
  initialView="dayGridMonth"
  weekends={true}
  events={[
    { title: 'event 1', date: '2022-05-01', color: 'green', },
    { title: 'event 2', date: '2022-05-02', color: 'red' }
  ]}
  />
  )
}

export default App;
