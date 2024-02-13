import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import logo from "../../assets/aliPictureLogo.png"
import palestine from "../../assets/newpalestine.png"
import "./Palestine.css";

export default function Palestine() {
    document.title = 'YWK Ali | Fundraiser';
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
            <div className="main-page-container">
                <h1>Fundraiser</h1>
                <button id='main-donate-button'>Donate</button>
                <h1>$0 / $1,000</h1>
                <img alt="palestine map" src={palestine} />
                <p style={{ fontSize: '28px', color: '#f5deb3', textAlign: 'center', padding: '10px' }}>The Palestinians are suffering from <span style={{ textDecoration: 'underline', fontSize: '32px', color: 'black' }}>GENOCIDE</span> at the hands of the Zionist entity.</p>
                <p style={{ fontSize: '28px', color: '#f5deb3', textAlign: 'center' }}>No ifs, ands, or buts, we must help.</p>
            </div>
        </>
    )
}
