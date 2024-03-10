import React, { useState } from "react";
import { Link } from "react-router-dom"
import logo from "../../assets/aliPictureLogo.png"
import palestine from "../../assets/newpalestine.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import cashapp from "../../assets/cashapp.png"
import venmo from "../../assets/venmo.png"
import pcrf from "../../assets/pcrf.png"
import "./Palestine.css";

export default function Palestine() {
    //Fundraiser
    document.title = 'YWK Ali | Fundraiser';
    document.body.style.backgroundColor = '#009736'
    const [currentSlide, setCurrentSlide] = useState(0);
    // const next = () => {
    //     setCurrentSlide(prevSlide => prevSlide + 1);
    // };
    // const prev = () => {
    //     setCurrentSlide(prevSlide => prevSlide - 1);
    // };
    const updateCurrentSlide = (index) => {
        if (currentSlide !== index) {
            setCurrentSlide(index);
        }
    };
    return (
        <>
            <div className="top-navbar-donations">
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Link to="/">
                        <img alt="logo" draggable={false} className="logo-image" src={logo} />
                    </Link>
                    <Link to="/" style={{ fontFamily: "Bright", color: "#d41d1d", fontSize: "44px", textDecoration: "none" }}>Home</Link>
                    <Link className="page-link" to="/music">Music</Link>
                </div>
                {/* <Link className="donate-page-music-link" to="/">Home</Link> */}
            </div>
            <br />
            <div style={{ overflowX: 'hidden' }}>
                <div className="main-page-container">
                    <h1 style={{ marginBottom: '-20px' }}>Fundraiser</h1>
                    <h1 style={{ marginBottom: '-20px' }}>For</h1>
                    <h1>Falasteen</h1>
                    <img src={pcrf} id='pcrf' />
                    <a href='https://pcrf1.app.neoncrm.com/YouWillKnowAli' target='_blank' referrer='noreferrer'>
                        <button id='main-donate-button'>Donate</button>
                    </a>
                    <div>
                        <a href='https://cash.app/$aliezzobezzo' target='_blank'>
                            <img id='small-donate-button' src={cashapp} />
                        </a>
                        <a href='https://account.venmo.com/u/youwillknowali' target='_blank'>
                            <img id='small-donate-button' src={venmo} />
                        </a>
                    </div>
                    <h1 style={{}}>$0 / $1,000</h1>
                    <img alt="palestine map" src={palestine} />
                </div>
                <br />
                <div className="carousel-container">
                    {/* <h2 style={{ fontSize: '28px', color: '#ebcca4', textAlign: 'center', padding: '10px', marginBottom: '-30px' }}>Palestinians are suffering from <span style={{ textDecoration: 'underline', fontSize: '32px', color: 'black', textShadow: '0px 0px 0px' }}>GENOCIDE</span>.</h2>
                    <h2 style={{ fontSize: '28px', color: '#ebcca4', textAlign: 'center', marginBottom: '-10px' }}>By donating, you are sending direct aid to those who need it.</h2> */}
                    <h2 style={{ textAlign: 'center', color: '#ebcca4', fontSize: '28px' }}>ALL PROCEEDS WILL GO TO PALESTINE THROUGH PCRF</h2>
                    <h2 style={{ textAlign: 'center', color: '#ebcca4', fontSize: '28px', marginTop: '-20px' }}>Transactions done through Cashapp and Venmo will be donated in your name.</h2>
                    <br />
                    <br />
                </div>
            </div >
        </>
    )
}
