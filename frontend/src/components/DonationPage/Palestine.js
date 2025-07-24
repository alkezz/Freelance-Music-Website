import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import logo from "../../assets/aliPictureLogo.png"
import palestine from "../../assets/palestine4.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import pcrf from "../../assets/pcrf.png"
import axios from 'axios'
import cheerio from 'cheerio'
import "./Palestine.css";

export default function Palestine() {
    //Fundraiser
    document.title = 'YWK Ali | Fundraiser';
    // const next = () => {
    //     setCurrentSlide(prevSlide => prevSlide + 1);
    // };
    // const prev = () => {
    //     setCurrentSlide(prevSlide => prevSlide - 1);
    // };
    return (
        <>
            <div className="top-navbar-donations">
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Link to="/">
                        <img alt="logo" draggable={false} className="logo-image" src={logo} />
                    </Link>
                    <Link to="/" style={{ color: "#d41d1d", textDecoration: "none" }}>Home</Link>
                    <Link className="page-link" to="/music">Music</Link>
                </div>
            </div>
            <div className="bottom-nav-container">
                <div className="stay-connected" style={{ display: "flex", flexDirection: "column", fontFamily: 'Daydream', fontSize: '14px', alignItems: 'center' }}>
                    <h2>Stay Connected</h2>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '50vw' }}>
                        <Link style={{ display: 'flex', alignItems: ' center', textDecoration: "none", color: "#454500", fontFamily: 'Daydream', fontSize: '12px' }} to={"https://www.twitter.com/aliezzobezzo"} target="_blank">
                            <i style={{ width: "30px" }} class="fa-brands fa-twitter fa-2x"></i>
                            <span>@AliEzzoBezzo</span>
                        </Link>
                        &nbsp;
                        <Link to='https://www.instagram.com/YouWillKnowAli' target="_blank" style={{ display: 'flex', alignItems: ' center', textDecoration: "none", color: "#454500", fontFamily: 'Daydream', fontSize: '12px' }}>
                            <i style={{ width: "30px" }} class="fa-brands fa-instagram fa-2x"></i>
                            <span>@YouWillKnowAli</span>
                        </Link>
                        &nbsp;
                        <Link to='https://www.tiktok.com/@YouWillKnowAloushi' target="_blank" style={{ display: 'flex', alignItems: ' center', textDecoration: "none", color: "#454500", fontFamily: 'Daydream', fontSize: '12px' }}>
                            <i style={{ width: "30px" }} class="fa-brands fa-tiktok fa-2x"></i>
                            <span>@YouWillKnowAloushi</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
