import "./footer.css"

export default function Footer() {
    return (
            <div className="footer">
                <div>
                    <div className="col">
                        <h1>Thapar University</h1>
                        <br />
                        <p>Thapar Institute of Engineering & Technology combines <br /> experience with new-age implementation.</p>
                        <br />
                        <p>P.O. Box 32, Bhadson Road, <br /> Patiala, Punjab, India</p>
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

                <div className="copyright">
                    <p>All Rights Reserved</p>
                    <p>Thapar Institute of Engineering and Technology</p>
                </div>

            </div>
    )
}
