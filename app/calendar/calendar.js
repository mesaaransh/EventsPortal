'use client';
import { useState } from "react";
import "./calendar.css"

export default function Calendar() {

    let [offset, setOffset] = useState(0);
    let a = new Date();
    let date = new Date(a.getFullYear(), a.getMonth() + offset, a.getDate());
    let year = date.getFullYear();
    let month = date.getMonth();

    let firstDay = new Date(year, month, 1);
    let lastDay = new Date(year, month + 1, 0);
    let totalDays = lastDay.getDate();

    let firstDayIndex = firstDay.getDay();
    let calendarDays = [];

    for (let i = 0; i < firstDayIndex; i++) {
        calendarDays.push(<td key={`empty-${i}`}></td>);
    }

    for (let day = 1; day <= totalDays; day++) {
        calendarDays.push(
            <td key={day} className={day}>
                <div>
                    <div className="date">
                        {day < 10 ? '0' + day : day}
                    </div>

                    <div className="socs">
                        {
                            day % 2 == 0 ?
                                <>
                                <div className="soc"></div>
                                <div className="soc"></div>
                                </>
                                :
                                <>
                                </>
                        }
                    </div>

                    {
                        day % 2 == 0 ?
                        <div className="count">02</div>
                        :
                        <></>
                    }
                </div>
            </td>
        );
    }

    const rows = [];
    for (let i = 0; i < calendarDays.length; i += 7) {
        rows.push(<tr key={i}>{calendarDays.slice(i, i + 7)}</tr>);
    }

    return (
        <div className="cc">
            
            <div className="monthSelector">
                <div className="selector" onClick={() => setOffset(offset-1)}> {"<"} </div>
                <h2>{firstDay.toLocaleString("default", { month: "long" })}</h2>
                <div className="selector" onClick={() => setOffset(offset+1)}> {">"} </div>
            </div>
            <table className="calendar">
                <thead>
                    <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}
