import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CalendarFormat } from "./styled/CalendarWrapper.styled";

const CalendarWrapper = ({ payments }) => {
    const [init, setInit] = useState(false);

    const [currDate, setCurrDate] = useState();
    const [paymentsDates, setPaymentsDates] = useState();

    useEffect(() => {
        const temp = [];
        payments.recurrent.forEach((el) => {
            temp.push({
                date: new Date(el.date).getDate(),
                month: new Date(el.date).getMonth(),
                year: new Date(el.date).getFullYear(),
                frequency: el.frequency,
                price: el.price,
            });
        });
        setPaymentsDates(temp);
    }, [payments]);

    function addDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    return (
        <CalendarFormat>
            {paymentsDates && (
                <Calendar
                    key={paymentsDates}
                    onClickDay={(ev) => {
                        setCurrDate(ev);
                    }}
                    value={currDate}
                    tileClassName={({ date }) => {
                        const tileDate = {
                            date: date.getDate(),
                            month: date.getMonth(),
                            year: date.getFullYear(),
                        };
                        if (
                            paymentsDates.some(
                                (e) =>
                                    e.date === tileDate.date &&
                                    e.month === tileDate.month &&
                                    e.year === tileDate.year
                            )
                        ) {
                            const index = paymentsDates.findIndex(
                                (e) =>
                                    e.date === tileDate.date &&
                                    e.month === tileDate.month &&
                                    e.year === tileDate.year
                            );

                            if (!init) {
                                setInit(true);
                                const el = paymentsDates[index];

                                const temp = [...paymentsDates];
                                for (let i = 0; i <= 180 / el.frequency; i++) {
                                    const elDate = `${el.year}-${el.month}-${el.date}`;
                                    const toAdd = el.date + i * el.frequency;
                                    const newDate = addDays(elDate, toAdd);

                                    temp.push({
                                        ...el,
                                        date: newDate.getDate(),
                                        month: newDate.getMonth(),
                                        year: newDate.getFullYear(),
                                    });
                                }
                                setPaymentsDates(temp);
                            }
                            return "paymentToDo";
                        } else {
                            return null;
                        }
                    }}
                    tileContent={({ date }) => {
                        const tileDate = {
                            date: date.getDate(),
                            month: date.getMonth(),
                            year: date.getFullYear(),
                        };
                        if (
                            paymentsDates.some(
                                (e) =>
                                    e.date === tileDate.date &&
                                    e.month === tileDate.month &&
                                    e.year === tileDate.year
                            )
                        ) {
                            const index = paymentsDates.findIndex(
                                (e) =>
                                    e.date === tileDate.date &&
                                    e.month === tileDate.month &&
                                    e.year === tileDate.year
                            );

                            const el = paymentsDates[index];
                            if (!init) {
                                setInit(true);

                                const temp = [...paymentsDates];
                                for (let i = 0; i <= 180 / el.frequency; i++) {
                                    const elDate = `${el.year}-${el.month}-${el.date}`;
                                    const toAdd = el.date + i * el.frequency;
                                    const newDate = addDays(elDate, toAdd);

                                    temp.push({
                                        ...el,
                                        date: newDate.getDate(),
                                        month: newDate.getMonth(),
                                        year: newDate.getFullYear(),
                                    });
                                }
                                setPaymentsDates(temp);
                            }
                            return <span> ({el.price}$)</span>;
                        } else {
                            return null;
                        }
                    }}
                />
            )}
        </CalendarFormat>
    );
};

export default CalendarWrapper;
