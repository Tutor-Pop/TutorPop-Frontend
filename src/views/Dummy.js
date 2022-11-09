import React from 'react'
import AppNav from '../components/AppNav'
import CourseContainer from '../components/CourseContainer'
import Logo from '../img/logo-color.png'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const events = [
  {
    id: 1,
    title: 'event 1',
    start: '2022-11-09T10:00:00',
    end: '2022-11-09T12:00:00',
  },
  {
    id: 2,
    title: 'event 2',
    start: '2022-11-09T13:00:00',
    end: '2022-11-09T18:00:00',
  },
  { id: 3, title: 'event 3', start: '2022-11-09T20:00:00', end: '2022-11-09T20:00:00' },
];

const Dummy = () => {

  return (
    <div className='dummy'>
      {/* <h1 className='app-title'>My Course</h1> */}
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          center: '',
        }}
        customButtons={{
          new: {
            text: 'new',
            click: () => console.log('new event'),
          },
        }}
        aspectRatio={2.5}
        editable={false}
        selectable={false}
        events={events}
        eventColor="Orange"
        slotMinTime={"00:00:00"}
        slotMaxTime={"24:00:00"}
        scrollTime={"07:00:00"}
        allDaySlot={false}
        dateClick={(e) => console.log(e.dateStr)}
        eventClick={(e) => console.log(e.event.id)}
      />
      
    </div>
  )
}

export default Dummy