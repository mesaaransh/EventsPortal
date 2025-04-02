'use client';
import { useState } from "react";
import "./calendar.css"

export default function Calendar() {

    let [offset, setOffset] = useState(0);
    let [menuOpen, setMenuOpen] = useState(1);

    let [selectedDate, setSelectedDate] = useState(null)

    let a = new Date();
    let date = new Date(a.getFullYear(), a.getMonth() + offset, a.getDate());
    let year = date.getFullYear();
    let month = date.getMonth();

    let firstDay = new Date(year, month, 1);
    let lastDay = new Date(year, month + 1, 0);
    let totalDays = lastDay.getDate();

    let firstDayIndex = firstDay.getDay();
    let lastDayIndex = lastDay.getDay();
    let calendarDays = [];

    for (let i = 0; i < firstDayIndex; i++) {
        calendarDays.push(<td key={`empty-${i}`}></td>);
    }

    for (let day = 1; day <= totalDays; day++) {
        calendarDays.push(
            <TD day={day} menuOpen={menuOpen} setMenuOpen={setMenuOpen} setSelectedDate={setSelectedDate} key={day} />
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

            <SideMenu open={menuOpen} year={year} month={month} date={selectedDate}/>

        </div>
    );
}


function SideMenu({open, date, month, year}) {

    let d = new Date(year, month, date)

    return (
        <div className={open ? "sideInfo sideInfoClose" : "sideInfo sideInfoOpen"}>
            <h2>{d.toLocaleDateString("default", {dateStyle: 'long'})}</h2>
            <p>{d.toLocaleDateString("default", {weekday: 'long'})}</p>

            <div className="eventList">
                {
                    [1, 2, 3, 4, 5, 6].map((key, i) => (
                        <SideMenuEvent num={i+1}  />
                    ))
                }
            </div>

        </div>
    )

}

function SideMenuEvent({num}){

    let img = `url(/graf${num}.jpeg)`

    return(
        <div className="sideMenuEvent" style={{backgroundImage: img}}>
            <div>
                <h1>{num}</h1>
            </div>
            <div>
                <h3>Saturnalia 25</h3>
                <p>TVC</p>
            </div>
            <div>
                <p>3:00 PM</p>
            </div>

        </div>
    )

}

function TD({ day, menuOpen, setMenuOpen, setSelectedDate }) {



    return (

        <td key={day} className={day} onClick={() => { setMenuOpen(0); setSelectedDate(day)}}>

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

    )

}