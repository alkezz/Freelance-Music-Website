import React from "react"
import { Link } from "react-router-dom"
import homeImage from "../../assets/homeImage.jpg"
import homeImageThree from "../../assets/home-image-3.png"
import logo from "../../assets/aliPictureLogo.png"
import "../Home/Home.css"
const Home = () => {
    return (
        <div className="home-container">
            <div style={{ marginRight: "60px" }}>
                <img alt="Ali drinking water" id="home-image" src={homeImage} />
            </div>
            <div className="middle-container">
                <div className="title">
                    <span id="title-span">You Will Know</span>
                    <span id='title-span'>Ali</span>
                </div>
                <div className="logo-container">
                    <img alt="logo" className="home-logo-image" src={logo} />
                </div>
                <div className="links-container">
                    <div className="music-link">
                        <Link className="music-link" to="/music">
                            Music
                        </Link>
                    </div>
                    <br />
                    <div className="donations-link">
                        <Link className="donations-link" target="_blank" to="https://distrokid.com/hyperfollow/youwillknowali/scum-of-the-earth">
                            Pre-Order
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
            <div style={{ marginLeft: "60px" }}>
                <img alt="Ali in a shopping cart" id="home-image" src={homeImageThree} />
            </div>
        </div>
    )
}

export default Home
