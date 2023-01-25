import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '../styles/components/calendar.css';
import { ICalendar } from '../@types';

const Calendar2: React.FC<ICalendar> = ({
  events,
  onChangeMonth
}) => {
  return (
    <div className='calendar-container'>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        titleFormat={{
          month: 'long'
        }}
        datesSet={(date) => {
          onChangeMonth(date.view.currentStart.getMonth(), String(date.view.currentStart.getFullYear()))
        }}
        initialDate={new Date()}
        headerToolbar={{
          start: 'prev',
          center: 'title',
          end: 'next'
        }}
        locale={'pt-br'}
        weekends={false}
        events={events}
      />
    </div>
  );
};

export default Calendar2;