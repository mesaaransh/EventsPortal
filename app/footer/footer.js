import "./footer.css"

export default function Footer() {
    return (
            <div className="footer">
                <div>
                    <div className="col">
                        <h1>Thapar University</h1>
                        <br />
                        <p>info@thapar.edu</p>
                        <p>+91 8427600332</p>
                        <p>Patiala, India 147004</p>
                    </div>
                    <div className="col">
                        <div>
                            <hr />
                            <h3> Pages </h3>
                        </div>
                        <p>Home</p>
                        <p>Societies</p>
                        <p>People</p>
                        <p>Contact Us</p>
                    </div>
                    <div className="col">
                        <div>
                            <hr />
                            <h3> Societies </h3>
                        </div>
                        <p>CCS</p>
                        <p>Mudra</p>
                        <p>TVS</p>
                    </div>
                    <div className="col">
                        <div>
                            <hr />
                            <h3> Key Events </h3>
                        </div>
                        <p>Saturnalia</p>
                        <p>HackTU</p>
                        <p>E-Summit</p>
                    </div>
                </div>

            </div>
    )
}
