'use client';

import axios  from "axios";
import { useEffect, useState } from "react";
import "./calendar.css"


export default function Calendar() {

    const [events, setEvents] = useState([]);
    let [selectedEvents, setSelectedEvents] = useState([])
    let [offset, setOffset] = useState(0);
    let [menuOpen, setMenuOpen] = useState(0);

    let a = new Date();
    let date = new Date(a.getFullYear(), a.getMonth() + offset, a.getDate());
    let year = date.getFullYear();
    let month = date.getMonth();

    let [selectedDate, setSelectedDate] = useState(a.getDate())

    let firstDay = new Date(year, month, 1);
    let lastDay = new Date(year, month + 1, 0);
    let totalDays = lastDay.getDate();

    let firstDayIndex = firstDay.getDay();
    let lastDayIndex = lastDay.getDay();
    let calendarDays = [];


    useEffect(() => {
        console.log(selectedEvents);
    }, [selectedEvents])


    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await axios.get("https://soc-perm-api.ccstiet.com/application/public/events/");
                setEvents(res.data.data);
            } catch (err) {
                console.error("Failed to fetch events:", err);
            }
        };

        fetchEvents();
    }, [offset]);

    const filteredEvents = events.filter((event) => {
        const fromDate = new Date(event.date_from);
        const toDate = new Date(event.date_to);

        return (
            (fromDate.getFullYear() === year && fromDate.getMonth() === month) ||
            (toDate.getFullYear() === year && toDate.getMonth() === month)
        );
    });

    for (let i = 0; i < firstDayIndex; i++) {
        calendarDays.push(<td key={`empty-${i}`}></td>);
    }

    for (let day = 1; day <= totalDays; day++) {

        const matchingEvents = filteredEvents.filter((event) => {
            const from = new Date(event.date_from);
            const to = new Date(event.date_to);
            const thisDate = new Date(year, month, day);

            return thisDate >= from && thisDate <= to;
        });

        calendarDays.push(
            <TD
                key={day}
                day={day}
                events={matchingEvents}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                setSelectedDate={setSelectedDate}
                setSelectedEvents={setSelectedEvents}
            />
        );
    }

    for (let i = lastDayIndex + 1; i < 7; i++) {
        calendarDays.push(<td key={`empty-end-${i}`}></td>);
    }

    const rows = [];
    for (let i = 0; i < calendarDays.length; i += 7) {
        rows.push(<tr key={i}>{calendarDays.slice(i, i + 7)}</tr>);
    }

    return (
        <div className="cc">
            <div className="calendarCont">
                <div className="monthSelector">
                    <div className="selector" onClick={() => setOffset(offset - 1)}> {"<"} </div>
                    <h1>{firstDay.toLocaleString("default", { month: "long" })} {year}</h1>
                    <div className="selector" onClick={() => setOffset(offset + 1)}> {">"} </div>
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

            <SideMenu open={menuOpen} year={year} month={month} date={selectedDate} events={selectedEvents} />

        </div>
    );
}


function SideMenu({ open, date, month, year, events }) {

    let d = new Date(year, month, date)

    return (
        <div className={open ? "sideInfo sideInfoClose" : "sideInfo sideInfoOpen"} onClick={() => {console.log(selectedEvents)}}>
            <h2>{d.toLocaleDateString("default", { dateStyle: 'long' })}</h2>
            <p>{d.toLocaleDateString("default", { weekday: 'long' })}</p>

            <div className="eventList">
                {
                    events.map((event, i) => (
                        <SideMenuEvent name={event.event_name} soc={event.society_shortname} time={event.time_from} key={i} num={i + 1} />
                    ))
                }
            </div>

        </div>
    )

}

function SideMenuEvent({ num, name, soc, time }) {

    let img = `url(/graf${num}.jpeg)`

    const formatted = new Date(`1970-01-01T${time}Z`).toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });

    return (
        <div className="sideMenuEvent" style={{ backgroundImage: img }}>
            <div>
                <h1>{num}</h1>
            </div>
            <div>
                <h3>{name}</h3>
                <p>{soc}</p>
            </div>
            <div>
                <p>{formatted}</p>
            </div>

        </div>
    )

}

function TD({ day, events = [], setSelectedDate, setMenuOpen, setSelectedEvents }) {

    function clickHandle(){
        setMenuOpen(0);
        setSelectedDate(day);
        setSelectedEvents(events)
    }

    return (

        <td key={day} className={day} onClick={clickHandle}>

            <div>
                <div className="date">
                    {day < 10 ? '0' + day : day}
                </div>

                <div className="socs">
                    {
                        events.map(() => (
                            <div className="soc"></div>
                        ))

                    }
                </div>

                {
                    events.length?
                    <div className="count">{events.length}</div>
                    :
                    <></>
                }

            </div>
        </td>

    )

}