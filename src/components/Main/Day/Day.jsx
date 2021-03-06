import React from 'react';
import moment from 'moment';
import Hour from '../Hour/Hour.jsx'
import { getRangeOfHoursByDate } from '../../../common/utilites';


const Day = ({ day, currDate, events, handleDeleteEvent }) => {

  const hours = getRangeOfHoursByDate(day);

  return (
    <div className="table__day">
      {
        hours.map((hour) => {
          const filteredEvents = events.filter(event => moment(new Date(`${event.date} ${event.startTime}`)).isSame(hour, 'hours'));

          return (
            <Hour key={hour} hour={hour} currDate={currDate} events={filteredEvents} handleDeleteEvent={handleDeleteEvent} />
          )
        })
      }
    </div>
  );

}

export default Day;