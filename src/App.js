
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { events } from './dummyData'
import timeGridPlugin from '@fullcalendar/timegrid'

function App() {

  return (
    <div className="App">
     <FullCalendar
  plugins={[ timeGridPlugin ]}
  initialView="timeGridWeek"
  slotMinTime="08:00:00"
  slotMaxTime = "23:30:00"
  slotDuration="00:15:00"
  weekends={false}
  eventBackgroundColor='red'
  eventTextColor='blue'
  events={[
    ...events
  ]
}
 allDaySlot ={false}

  />
    </div>
  );
}

export default App;
