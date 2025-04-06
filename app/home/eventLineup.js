import "./eventLineup.css"

export default function EventLinup() {

    return (
      <div className="eventLineup section">
  
        <h1>Event Linup</h1>
  
        <div className="events">
          {
            [0, 1].map((e, i) => (
              <Event
                title={"Saturnalia' 25"}
                description={'Let the world unite!'}
                date={"23 Jan"}
                day={'Thursday'}
                society={'CCS'}
                image = {(i+7)%10}
                key={i+1}
              />
            ))
          }
  
        </div>
  
        <button className="right">View More</button>
  
      </div>
    )
  
  }
  
  function Event({ title, description, date, day, image, society}) {
  
    let i = `url('/graf${image}.jpeg')`
    return (
      <div className="event" style={{backgroundImage: i}}>
        <div>
          <h1>{date.split(" ")[0]} <span>{date.split(" ")[1]}</span></h1>
          <h3>{day}</h3>
        </div>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div>
            <h1>ISTE</h1>
            <button className="outlinelight">
                Learn More
            </button>
        </div>
      </div>
    )
  
  }