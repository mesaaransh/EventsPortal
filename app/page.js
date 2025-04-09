import "./home.css"
import EventLinup from "./home/eventLineup"
import SignatureEvents from "./home/signatureEvents"

export default function Home() {
  return (
    <main>
      <Hero />
      <EventLinup />
      <SignatureEvents/>
    </main>
  )
}

function Hero() {

  return (
    <div className="hero section">
      <video autoPlay loop muted playsInline className="heroVideo">
        <source src="https://res.cloudinary.com/dvmteldw0/video/upload/v1722359726/dzklg0ifsnknngvvllfh.mp4" type="video/mp4" />
      </video>
      <h1>Student Activities at <br /> Thapar University</h1>
      <p>Make the most of every opportunity to learn, enjoy and level up your skills</p>

      <div className="buttonGroup">
        <button className="light">Explore Events</button>
        <button className="dark">View Socities</button>
      </div>

    </div>
  )

}