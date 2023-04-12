import React from "react"
import { Link } from "react-router-dom"
import homeImageOne from "../../assets/home-image-1.png"
import homeImageTwo from "../../assets/home-image-2.png"
import homeImageThree from "../../assets/home-image-3.png"
import homeImageFour from "../../assets/home-image-4.png"
import logo from "../../assets/aliPictureLogo.png"
import "../Home/Home.css"
const Home = () => {
    return (
        <div className="home-container">
            <div className="middle-container">
                <div className="title">
                    <span id="title-span">You Will Know</span>
                    <span id='title-span'>Ali</span>
                </div>
                <div className="logo-container">
                    <img className="home-logo-image" src={logo} />
                </div>
                <div className="links-container">
                    <div className="music-link">
                        <Link className="music-link" to="/music">
                            Music
                        </Link>
                    </div>
                    <br />
                    <div className="donations-link">
                        <Link className="donations-link" to="/donate">
                            Donate
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
