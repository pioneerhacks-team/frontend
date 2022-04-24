import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarWrapper = () => {
    const [date, setDate] = useState();
    // https://www.npmjs.com/package/react-calendar
    return (
        <div>
            <Calendar
                onChange={(ev) => setDate(ev.target.value)}
                value={date}
            />
            <p>THIS IS THE EVENT YOU CHOSE :)</p>
        </div>
    );
};

export default CalendarWrapper;
