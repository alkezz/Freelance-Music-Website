import React, { useState } from "react";
import { Link } from "react-router-dom"
import logo from "../../assets/aliPictureLogo.png"
import palestine from "../../assets/newpalestine.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
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
            <div style={{ overflowX: 'hidden' }}>
                <div className="main-page-container">
                    <h1 style={{ marginBottom: '-20px' }}>Fundraiser</h1>
                    <h1 style={{ marginBottom: '-20px' }}>For</h1>
                    <h1 style={{}}>Falasteen</h1>
                    <button onClick={(e) => document.getElementById('scroll-to').scrollIntoView({ behavior: 'smooth' })} id='main-donate-button'>Donate</button>
                    <h1 style={{}}>$0 / $1,000</h1>
                    <img alt="palestine map" src={palestine} />
                </div>
                <br />
                <div className="carousel-container">
                    <h2 style={{ fontSize: '28px', color: '#ebcca4', textAlign: 'center', padding: '10px', marginBottom: '-30px' }}>Palestinians are suffering from <span style={{ textDecoration: 'underline', fontSize: '32px', color: 'black', textShadow: '0px 0px 0px' }}>GENOCIDE</span>.</h2>
                    <h2 style={{ fontSize: '28px', color: '#ebcca4', textAlign: 'center', marginBottom: '-10px' }}>By donating, you are sending direct aid to those who need it.</h2>
                    <h2 style={{ textAlign: 'center', color: '#ebcca4', fontSize: '28px' }}>ALL PROCEEDS WILL GO TO PALESTINE</h2>
                    <br />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-20px' }}>
                        {/* <button onClick={prev}>
                            Prev
                        </button>
                        <button onClick={next}>
                            Next
                        </button> */}
                        {/* <Carousel onChange={updateCurrentSlide} selectedItem={currentSlide} className="crsl" infiniteLoop centerMode centerSlidePercentage={65}>
                            <img alt='random picture' style={{ padding: '15px' }} src='https://picsum.photos/300?random=5' />
                            <img alt='random picture' style={{ padding: '15px' }} src='https://picsum.photos/300?random=4' />
                            <img alt='random picture' style={{ padding: '15px' }} src='https://picsum.photos/300?random=3' />
                            <img alt='random picture' style={{ padding: '15px' }} src='https://picsum.photos/300?random=2' />
                            <img alt='random picture' style={{ padding: '15px' }} src='https://picsum.photos/300?random=1' />
                        </Carousel>
                        <div className="about-product">
                            <h2 style={{ marginTop: '-40px' }}>Product Name</h2>
                            <p style={{ fontSize: '30px', display: 'flex', justifyContent: 'center', marginTop: '-10px' }}>$10</p>
                            <h2 style={{ fontSize: '20px', marginTop: '-10px' }}>Made by: John Doe</h2>
                            <button className='buy-button'>I Want This</button>
                        </div> */}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#f5deb3', textAlign: 'center', marginTop: '-50px' }}>
                        {/* <h2 style={{ fontSize: '32px', marginTop: '-10px', fontSize: '18px' }} >Thank you so much!</h2>
                        <button className='donate-button'>DONATE</button> */}
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </div >
        </>
    )
}
