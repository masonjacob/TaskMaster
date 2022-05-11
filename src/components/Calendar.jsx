import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

function Calendar() {
  return (
  <FullCalendar
  plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin]}
  headerToolbar={{
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  }}
  initialView="dayGridMonth"
  weekends={true}
  selectable={true}
  selectHelper={true}
  editable={true}


  events={[
    { title: 'event 1', date: '2022-05-01', color: 'green', },
    { title: 'event 2', date: '2022-05-02', color: 'red', }
  ]}
  />
  )
}

export default Calendar;

