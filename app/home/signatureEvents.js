import "./signatureEvents.css"

export default function SignatureEvents(){

    return(
        <div className="eventLineup section">

            <h1>Signature Events</h1>
            
            <div className="sigEvents">
                <div className="sigEvent">
                    <div className="sigEventImage">
                        <img src="/graf7.jpeg" alt="" />
                    </div>
                    <h1>Saturnalia</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum maxime consectetur voluptatem commodi, inventore facilis adipisci odio quam reiciendis. Animi blanditiis atque dolore, voluptatibus esse totam! Vero nihil laboriosam quibusdam enim sapiente nisi molestias nesciunt quaerat veniam tempora, cumque fuga.</p>
                    <button className="outlinelight">Photo Gallery</button>
                </div>

                <div className="sigEvent">
                    <div className="sigEventImage">
                        <img src="/graf5.jpeg" alt="" />
                    </div>
                    <h1>Thapar Food Festival</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum maxime consectetur voluptatem commodi, inventore facilis adipisci odio quam reiciendis. Animi blanditiis atque dolore, voluptatibus esse totam! Vero nihil laboriosam quibusdam enim sapiente nisi molestias nesciunt quaerat veniam tempora, cumque fuga.</p>
                    <button className="outlinelight">Photo Gallery</button>
                </div>
            </div>

        </div>
    )

}