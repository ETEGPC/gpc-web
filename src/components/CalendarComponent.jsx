import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {  useState } from 'react';
import '../styles/components/CalendarComponent.css'

export function CalendarComponent() {
	const [value, onChange] = useState(new Date());


	return (
		<div>
			<Calendar onActiveStartDateChange={date => {console.log(date.activeStartDate.getMonth())}} onChange={onChange} defaultValue={value} />
		</div>
	);
}

// onClickMonth={date => {console.log(date.getMonth())}}