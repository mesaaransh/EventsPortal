import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import "./event.css"

export default function Event() {
  return (
    <div className="eventPage section">

        <div className="eventInfo">
          <div className="eventInfoHead">
            <div>
              <h1>Event Name</h1>
              <h4>Tan Audi | 22nd March | 5:00 PM</h4>
            </div>

            <div>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima libero aperiam accusantium sapiente hic architecto quae magni deserunt. Eius impedit doloremque quas, ipsam blanditiis recusandae iure, nostrum ad enim consequuntur consectetur. Non voluptatem autem quia tenetur dignissimos incidunt voluptates illum similique amet? Obcaecati ratione explicabo at modi sapiente sit architecto quo ullam sequi quos libero mollitia praesentium fugit minus laudantium autem cumque quia quas, ab eaque facilis error? Deleniti maxime nemo quas eius ipsa animi eligendi itaque sed ut, hic, consequatur, id quia error quisquam obcaecati asperiores adipisci saepe? Et illo fugiat nihil dolorem itaque architecto ad! Quos, unde ipsum.</p>

          <div className="buttonGroup">
            <button className="light">Society Website</button>
          </div>

        </div>

    </div>
  )
}
