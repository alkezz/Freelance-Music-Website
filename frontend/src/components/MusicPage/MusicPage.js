import React, { useState, useEffect } from "react"
import "./MusicPage.css"
import { Link } from "react-router-dom"
import logo from "../../assets/aliPictureLogo.png"
import aliLogo from "../../assets/aliLogo.png"
import CircularProgress from '@mui/material/CircularProgress';
document.body.style.backgroundColor = "#b11e1e"
const MusicPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    })
    return (
        <>
            <div className="top-navbar">
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Link to="/">
                        <img alt="logo" className="logo-image-music-nav" src={logo} />
                    </Link>
                    <Link to="/" style={{ fontFamily: "Bright", color: "#d41d1d", fontSize: "44px", textDecoration: "none" }}>Home</Link>
                    <Link className="page-link" to="/donate">Give Back</Link>
                </div>
                {/* <Link className="donate-page-music-link" to="/">Home</Link> */}
            </div>
            <div className="music-page-container">
                {/* <Link to="/">
                    <img alt="logo" id='image-logo' src={logo} />
                </Link> */}
                {/* <br /> */}
                <div className="streaming-services-container">
                    <Link to="https://open.spotify.com/artist/3MY6vqsnQMgTOJO2MEeqgm?si=p3HGe97GQy6Km-8vnKarsg" target="_blank" className='streaming-logo spotify'><i class="fa-brands fa-spotify fa-5x"></i></Link>
                    <Link to="https://music.apple.com/us/artist/ali/1634430857" target="_blank" className='streaming-logo apple'><i class="fa-brands fa-apple fa-5x"></i></Link>
                    <Link to="https://youtube.com/@youwillknowali412" target="_blank" className='streaming-logo youtube'><i class="fa-brands fa-youtube fa-5x"></i></Link>
                    <Link to="https://on.soundcloud.com/crn53KykTkYZUHVi7" target="_blank" className='streaming-logo soundcloud'><i class="fa-brands fa-soundcloud fa-5x"></i></Link>
                    <Link to="https://music.amazon.com/artists/B0B721ZN63/you-will-know-ali?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_5U7MxWRzX5RG0ag5WqWuZmS6B" target="_blank" className='streaming-logo amazon'><i class="fa-brands fa-amazon fa-5x"></i></Link>
                </div>
                <br />
                <br />
                {isLoading && (
                    <div className="loading-video-div">
                        <CircularProgress sx={{ color: "#d41d1d" }} />
                    </div>
                )}
                {!isLoading && (
                    <iframe
                        style={{ borderRadius: "25px" }}
                        id='iframe-embed'
                        src="https://www.youtube.com/embed/_WoSDYHKkww"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen />
                )}
                <br />
                {isLoading && (
                    <div className="loading-video-div">
                        <CircularProgress sx={{ color: "#d41d1d" }} />
                    </div>
                )}
                {!isLoading && (
                    <iframe
                        style={{ borderRadius: "25px" }}
                        id='iframe-embed'
                        src="https://www.youtube.com/embed/kOenWUyCAQM"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    />
                )}
                <br />
                {/* <div className="about-me-paragraph">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Quisque id diam vel quam elementum pulvinar etiam. Fringilla ut morbi tincidunt augue interdum velit euismod in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nisi est sit amet facilisis magna etiam tempor. Urna nec tincidunt praesent semper feugiat. Integer vitae justo eget magna fermentum iaculis eu non. Faucibus scelerisque eleifend donec pretium. Id porta nibh venenatis cras sed felis. Potenti nullam ac tortor vitae. Netus et malesuada fames ac turpis egestas. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Vel pharetra vel turpis nunc. Nec nam aliquam sem et tortor. Habitasse platea dictumst quisque sagittis purus. Nam at lectus urna duis convallis. Cursus mattis molestie a iaculis. Senectus et netus et malesuada fames ac turpis egestas sed.</p>
                </div> */}
                <div className="bottom-nav-container">
                    <div className="stay-connected" style={{ display: "flex", flexDirection: "column" }}>
                        <h2>Stay Connected</h2>
                        <Link style={{ textDecoration: "none", color: "#d41d1d" }} to={"https://www.twitter.com/aliezzobezzo"} target="_blank">
                            <i style={{ width: "40px" }} class="fa-brands fa-twitter fa-2x"></i>
                            @AliEzzoBezzo
                        </Link>
                        &nbsp;
                        <Link to='https://www.instagram.com/YouWillKnowAli' target="_blank" style={{ textDecoration: "none", color: "#d41d1d" }}>
                            <i style={{ width: "40px" }} class="fa-brands fa-instagram fa-2x"></i>
                            <span>@YouWillKnowAli</span>
                        </Link>
                        &nbsp;
                        <Link to='https://www.tiktok.com/@YouWillKnowAloushi' target="_blank" style={{ textDecoration: "none", color: "#d41d1d" }}>
                            <i style={{ width: "40px" }} class="fa-brands fa-tiktok fa-2x"></i>
                            @YouWillKnowAloushi
                        </Link>
                        <p style={{ color: "#d41d1d", fontSize: "10px", marginTop: "50px" }}>© 2023 You Will Know Ali All Rights Reserved</p>
                    </div>
                    <div className="ali-logo">
                        <Link to="/">
                            <img className="aliLogo" alt="logo" src={aliLogo} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MusicPage
