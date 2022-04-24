import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CalendarFormat } from "./styled/CalendarWrapper.styled";

// eslint-disable-next-line no-unused-vars
const CalendarWrapper = ({ userInfosRecur, userInfosSingle }) => {
    const [date, setDate] = useState();
    // function findEvent() {
    //     userInfosRecur.forEach((el) => {
    //         if (el.date === date) {
    //             console.log("yes");
    //         }
    //     });
    // }
    // https://www.npmjs.com/package/react-calendar
    return (
        <CalendarFormat>
            <Calendar
                onClickDay={(ev) => {
                    setDate(ev.target.value);
                }}
                value={date}
            />
            <p>{}</p>
        </CalendarFormat>
    );
};

export default CalendarWrapper;
