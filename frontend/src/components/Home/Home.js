import React from "react"
import { Link } from "react-router-dom"
import homeImage from "../../assets/homeImage.jpg"
import homeImageThree from "../../assets/home-image-3.png"
import logo from "../../assets/aliPictureLogo.png"
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import "../Home/Home.css"
const Home = () => {
    document.title = 'YWK Ali'
    return (
        <div className="home-container">
            <div style={{ marginRight: "60px" }}>
                <img load draggable={false} alt="Ali drinking water" id="home-image" src={homeImage} />
            </div>
            <div className="middle-container">
                <div className="title">
                    <Slide {...{ timeout: 4000 }}
                        in={true} direction="down">
                        <span id="title-span">You Will Know</span>
                    </Slide>
                    <Slide {...{ timeout: 3500 }} in={true} direction="up">
                        <span id='title-span'>Ali</span>
                    </Slide>
                </div>
                <div className="logo-container">
                    <img alt="logo" className="home-logo-image" src={logo} />
                </div>
                <div className="links-container">
                    <Grow {...{ timeout: 6000 }} in={true}>
                        <div className="music-link">
                            <Link className="music-link" to="/music">
                                Music
                            </Link>
                        </div>
                    </Grow>
                    <br />
                    <Grow {...{ timeout: 6000 }} in={true}>
                        <div className="donations-link">
                            <Link className="donations-link" target="_blank" to="https://distrokid.com/hyperfollow/youwillknowaliandd3vilishbri/behave-2">
                                Pre-Order
                            </Link>
                        </div>
                    </Grow>
                    <br />
                    <Grow {...{ timeout: 6000 }} in={true}>
                        <div className="donations-link">
                            <Link className="donations-link" to="/donate">
                                Give Back
                            </Link>
                        </div>
                    </Grow>
                    <br />
                    {/* <Grow {...{ timeout: 6000 }} in={true}>
                        <div className="donations-link">
                            <Link style={{ linkStyle: "none" }} className="donations-link" to="/portfolio">
                                Portfolio
                            </Link>
                        </div>
                    </Grow> */}
                </div>
            </div>
            <div style={{ marginLeft: "60px" }}>
                <img load draggable={false} alt="Ali in a shopping cart" id="home-image" src={homeImageThree} />
            </div>
        </div>
    )
}

export default Home
