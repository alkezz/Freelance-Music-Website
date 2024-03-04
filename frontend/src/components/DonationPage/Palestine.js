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
    document.body.style.backgroundColor = '#b11e1e'
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
                    <button id='main-donate-button'>Donate</button>
                    <h1 style={{}}>$0 / $1,000</h1>
                    <img alt="palestine map" src={palestine} />
                    <h2 style={{ fontSize: '28px', color: '#ebcca4', textAlign: 'center', padding: '10px', marginBottom: '-20px' }}>The Palestinians are suffering from <span style={{ textDecoration: 'underline', fontSize: '32px', color: 'black', textShadow: '0px 0px 0px' }}>GENOCIDE</span> at the hands of the Zionist entity.</h2>
                    <h2 style={{ fontSize: '28px', color: '#ebcca4', textAlign: 'center', }}>No ifs, ands, or buts, we <span style={{ textDecoration: 'underline', fontSize: '32px', color: 'black', textShadow: '0px 0px 0px' }}>MUST</span> help.</h2>
                    <h2 style={{ textAlign: 'center', color: '#ebcca4', }}>ALL PROCEEDS WILL GO TO PALESTINE</h2>
                </div>
                <br />
                <div className="carousel-container">
                    <h1 style={{ textDecoration: 'underline' }}>Gallery</h1>
                    <br />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {/* <button onClick={prev}>
                            Prev
                        </button>
                        <button onClick={next}>
                            Next
                        </button> */}
                        <Carousel onChange={updateCurrentSlide} selectedItem={currentSlide} className="crsl" infiniteLoop centerMode centerSlidePercentage={85}>
                            <img alt='random picture' style={{ padding: '15px' }} src='https://picsum.photos/300?random=5' />
                            <img alt='random picture' style={{ padding: '15px' }} src='https://picsum.photos/300?random=4' />
                            <img alt='random picture' style={{ padding: '15px' }} src='https://picsum.photos/300?random=3' />
                            <img alt='random picture' style={{ padding: '15px' }} src='https://picsum.photos/300?random=2' />
                            <img alt='random picture' style={{ padding: '15px' }} src='https://picsum.photos/300?random=1' />
                        </Carousel>
                        <div className="about-product">
                            <h2>Product Name</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Nisi est sit amet facilisis magna etiam tempor. Platea dictumst quisque sagittis purus.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Nisi est sit amet facilisis magna etiam tempor. Platea dictumst quisque sagittis purus.</p>
                            <p style={{ fontSize: '30px' }}>$10</p>
                            {/* {currentSlide === 0 && (
                                <>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Nisi est sit amet facilisis magna etiam tempor. Platea dictumst quisque sagittis purus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Nisi est sit amet facilisis magna etiam tempor. Platea dictumst quisque sagittis purus.</p>
                                    <p style={{ fontSize: '30px' }}>$10</p>
                                </>
                            )}
                            {currentSlide === 1 && (
                                <>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Nisi est sit amet facilisis magna etiam tempor. Platea dictumst quisque sagittis purus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Nisi est sit amet facilisis magna etiam tempor. Platea dictumst quisque sagittis purus.</p>
                                    <p style={{ fontSize: '30px' }}>$25</p>
                                </>
                            )}
                            {currentSlide === 2 && (
                                <>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Nisi est sit amet facilisis magna etiam tempor. Platea dictumst quisque sagittis purus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Nisi est sit amet facilisis magna etiam tempor. Platea dictumst quisque sagittis purus.</p>
                                    <p style={{ fontSize: '30px' }}>$50</p>
                                </>
                            )} */}
                            <button id='main-donate-button'>I Want This</button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#f5deb3' }}>
                        <h2 style={{ fontSize: '32px', marginBottom: '-10px' }}>I Don't Care</h2>
                        <h2 style={{ fontSize: '32px', marginBottom: '-10px' }}>I just wanna donate!</h2>
                        <h2 style={{ fontSize: '32px' }}>No worries! Thank you so much!</h2>
                        <button id='main-donate-button'>DONATE</button>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </div >
        </>
    )
}
