import React from "react"
import { Link } from "react-router-dom"
import homeImage from "../../assets/homeImage.jpg"
import homeImageThree from "../../assets/home-image-3.png"
import videoOne from "../../assets/videos/ajVideo1.mov"
import videoTwo from "../../assets/videos/ajVideo2.mov"
import logo from "../../assets/aliPictureLogo.png"
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import "../Home/Home.css"
const Home = () => {
    document.title = 'YWK Ali'
    return (
        <div className="home-container">
            <div style={{ marginRight: "60px" }}>
                <video autoplay='autplay' loop muted id="home-image">
                    <source src={videoOne} type="video/mp4" />
                </video>
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
                            <Link className="donations-link" target="_blank" to="https://distrokid.com/hyperfollow/youwillknowali/so-i-did-2">
                                Pre-Order
                            </Link>
                        </div>
                    </Grow>
                    <br />
                    {/* <Grow {...{ timeout: 6000 }} in={true}>
                        <div className="donations-link">
                            <Link className="donations-link" to="/donate">
                                Fundraiser
                            </Link>
                        </div>
                    </Grow> */}
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
                <video autoplay='autplay' loop muted id="home-image">
                    <source src={videoTwo} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Home
