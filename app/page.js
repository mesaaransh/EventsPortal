import Calendar from "./calendar/calendar"
import "./home.css"

export default function Home() {
  return (
    <main>
      <Hero />
      <EventLinup />
      <Calendarcont/>
    </main>
  )
}

function Hero() {

  return (
    <div className="hero section">
      <h1>Student Activities at <br /> Thapar University</h1>
      <p>Make the most of every opportunity to learn, enjoy and level up your skills</p>

      <div className="buttonGroup">
        <button className="light">Explore Events</button>
        <button className="dark">View Socities</button>
      </div>

    </div>
  )

}


function EventLinup() {

  return (
    <div className="eventLineup section">

      <h1>Event Linup</h1>

      <div className="events">
        <Event
          title={"HackTU"}
          description={'The biggest hackathon of northern hemisphere, now a MLH partner'}
          date={"2nd January"}
          day={'Thursday'}
          clas={'test1'}
        />

        <Event
          title={"E Summit 25"}
          description={'A summit for entrepreneurs, by entrepreneurs'}
          date={"28th February"}
          day={'Friday'}
          clas={'test2'}
        />
      </div>

      <button className="right">View More</button>

    </div>
  )

}

function Event({ title, description, date, day, clas }) {

  return (
    <div className={"event " + clas}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <h1>{date}</h1>
        <p>{day}</p>
      </div>
    </div>
  )

}

function Calendarcont(){

  return(
    <div className="homecalendar section">
      <h1>Calendar</h1>
      <Calendar/>
    </div>
  )

}