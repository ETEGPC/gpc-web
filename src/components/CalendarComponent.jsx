import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import '../styles/components/CalendarComponent.css'

export function CalendarComponent() {

	const [value, onChange] = useState(new Date());


	return (

		<div>
			<Calendar onClickMonth={date => {console.log(date.getMonth())}} onChange={onChange} value={value} />
		</div>
	);
}