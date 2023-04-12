import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/aliPictureLogo.png"
import lois from "../../assets/loisFlineDonationImg.svg"
import warmHearts from "../../assets/warmHeartsFoundation.svg"
import lebanon from "../../assets/beiruitHeritage.svg"
import redCross from "../../assets/lebaneseRedCross.svg"
import alawaa from "../../assets/Al-Awada.svg"
import aliLogo from "../../assets/aliLogo.png"
import "./DonationPage.css"

const DonationPage = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize); // Add resize event listener
        return () => {
            window.removeEventListener("resize", handleResize); // Clean up event listener on component unmount
        };
    }, []);
    if (!lois || !warmHearts || !lebanon || !redCross || !alawaa) return null
    return (
        <>
            {screenWidth >= 985 && (
                <>
                    <div className="top-navbar">
                        <Link to="/">
                            <img className="logo-image" src={logo} />
                        </Link>
                        <Link className="donate-page-music-link" to="/music">Music</Link>
                    </div>
                    <div className="donations-page-container">
                        <div className="donation-content-container" >
                            <p style={{ display: "flex", justifyContent: "center", fontFamily: "Bright", fontSize: "48px" }}>Donate</p>
                            <div className="donation-option">
                                <div className="org-image">
                                    <img src={lois} />
                                </div>
                                <div className="about-org">
                                    <p id='organization-name'>Lois Flire Foundation</p>
                                    <p className="org-desc">This amazing organization comes from the works of one of our collective’s Mother – Rico! Rico’s Mother, Chigozie, founded this non-profit organization with the focus of providing essential needs to those that need them. Specifically, pregnant and disabled individuals around the world. They provide these individuals with food, clothing, and shelter. A true act of humanity. One of their projects was based in Nigerian hinterlands, where they personally brought light to over 200 lives. Help this organization assist more lives!</p>
                                    <div className="buttons-container">
                                        <Link target="_blank" to="https://www.loisflirefoundation.org.ng/partner-with-us/" >
                                            <button className="donate-button">Donate</button>
                                        </Link>
                                        &nbsp;
                                        &nbsp;
                                        <Link target="_blank" to='https://www.facebook.com/LoisFLIREorganisation/'>
                                            <button className="learn-more-button">Learn More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="donation-option">
                                <div className="about-org">
                                    <p id='organization-name'>Warm Hearts Foundation</p>
                                    <p className="org-desc">This is yet another wonderful organization that a member of our collective is connected to! Jordan’s mother, Monase, is part of a non-profit organization called “The Warm Hearts Foundation”. This organization benefits the less fortunate by providing shelter, clean water, educational opportunities, and much more. The Warm Hearts Foundation has a plan to “work with our partners in Kenya and Malawi to initiate and implement projects which will make a positive difference in the lives of the poor and disadvantaged in those countries by improving their health, education, and ultimately leading to self determination,“. They have projects committed to classroom construction, water irrigation, and so much more. Truly a heartwarming group of individuals bringing real change into the world</p>
                                    <div className="buttons-container">
                                        <Link to='https://warmheartsfoundation.org/donate/' target='_blank'>
                                            <button className="donate-button">Donate</button>
                                        </Link>
                                        &nbsp;
                                        &nbsp;
                                        <Link target="_blank" to='https://www.warmheartsfoundation.org/about'>
                                            <button className="learn-more-button">Learn More</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="org-image">
                                    <img src={warmHearts} />
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="donation-option">
                                <div className="org-image">
                                    <img src={lebanon} />
                                </div>
                                <div className="about-org">
                                    <p id='organization-name'>Beirut Heritage Initiative</p>
                                    <p className="org-desc">With the explosion that occurred on the ports in Beirut on August 4th, many buildings possessing cultural significance and history were destroyed. This also meant that many families were displaced without a home. The Beirut Heritage Initiative is committed to restoring these buildings, further strengthening the cultural bond that these buildings held on the Lebanese people and bringing them back to their shelter.</p>
                                    <div className="buttons-container">
                                        <Link target='_blank'>
                                            <button className="donate-button" to='https://beirutheritageinitiative.com/donate/'>Donate</button>
                                        </Link>
                                        &nbsp;
                                        &nbsp;
                                        <Link to='https://beirutheritageinitiative.com/who-we-are/' target='_blank' >
                                            <button className="learn-more-button">Learn More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="donation-option">
                                <div className="about-org">
                                    <p id='organization-name'>Lebanese Red Cross</p>
                                    <p className="org-desc">My people of Lebanon have been living in a nightmare. From the on-going economic crisis to the explosion that occurred in Beirut on August 4th of 2020, along with the pandemic, the Lebanese population has yet to catch a break. Many families struggle with their financial situations, and more importantly, struggle to feed themselves. The Lebanese Red Cross is on the forefront of commitment to temporarily bringing ease to these struggles. All together, the Lebanese Red Cross has brought aid to over 200,000 individuals in Lebanon. Despite their terrific efforts, the country is still in distress. Help us out!</p>
                                    <div className="buttons-container">
                                        <Link to='https://www.supportlrc.app/' target='_blank'>
                                            <button className="donate-button">Donate</button>
                                        </Link>
                                        &nbsp;
                                        &nbsp;
                                        <Link to='https://www.redcross.org.lb/' target='_blank'>
                                            <button className="learn-more-button">Learn More</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="org-image">
                                    <img src={redCross} />
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="donation-option">
                                <div className="org-image">
                                    <img src={alawaa} />
                                </div>
                                <div className="about-org">
                                    <p id='organization-name'>Al-Awda</p>
                                    <p className="org-desc">As the world has seen for decades on end, the indigeneity of Palestinians is being actively erased. Al-Awda is committed to halting this erasure, to uplift the voices of Palestinians who fight for their land, and to assure that what is lost is rightfully returned. Essentially, Al-Awda is committed to the Palestinian right of return. On a daily basis, Palestinians are subjected to losing their homes – their property that has been passed through generations. Palestinians are fighting for the right to their existence. They have been fighting for over 70 years. Help them now, through Al-Awda.</p>
                                    <div className='buttons-container'>
                                        <Link to='https://al-awda.org/give/' target='_blank'>
                                            <button className="donate-button">Donate</button>
                                        </Link>
                                        &nbsp;
                                        &nbsp;
                                        <Link to='https://al-awda.org/about/our-aims-and-objectives/' target='_blank'>
                                            <button className="learn-more-button">Learn More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-nav-container" style={{ paddingBottom: "50px", marginTop: "50px", display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%", backgroundColor: "#ffa30d", borderTop: "1px solid #d41d1d" }}>
                            <div className="stay-connected" style={{ display: "flex", flexDirection: "column" }}>
                                <h2>Stay Connected</h2>
                                <Link style={{ textDecoration: "none", color: "#d41d1d" }} to={"https://www.twitter.com/aliezzobezzo"} target="_blank">
                                    <i class="fa-brands fa-twitter fa-2x"></i>
                                    &nbsp;
                                    @AliEzzoBezzo
                                </Link>
                                &nbsp;
                                <Link to='https://www.instagram.com/aliezedine' target="_blank" style={{ textDecoration: "none", color: "#d41d1d" }}>
                                    <i class="fa-brands fa-instagram fa-2x"></i>
                                    &nbsp;
                                    @aliezedine
                                </Link>
                                &nbsp;
                                <Link to='https://www.tiktok.com/@YouWillKnowAloushi' target="_blank" style={{ textDecoration: "none", color: "#d41d1d" }}>
                                    <i class="fa-brands fa-tiktok fa-2x"></i>
                                    &nbsp;
                                    @YouWillKnowAloushi
                                </Link>
                                <p style={{ color: "#d41d1d", fontSize: "10px", marginTop: "50px" }}>© 2023 You Will Know Ali All Rights Reserved</p>
                            </div>
                            <div className="ali-logo">
                                <Link to="/">
                                    <img style={{ width: "200px", height: "200px", paddingTop: "20px" }} src={aliLogo} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {screenWidth <= 984 && (
                <>
                    <div className="top-navbar">
                        <Link to="/">
                            <img className="logo-image" src={logo} />
                        </Link>
                        <Link className="donate-page-music-link" to="/music">Music</Link>
                    </div>
                    <div className="donations-page-container">
                        <div className="donation-content-container" >
                            <p style={{ display: "flex", justifyContent: "center", fontFamily: "Bright", fontSize: "48px" }}>Donate</p>
                            <div className="donation-option">
                                <div className="org-image">
                                    <img id='org-pic' src={lois} />
                                </div>
                                <div className="about-org">
                                    <p id='organization-name'>Lois Flire Foundation</p>
                                    <p className="org-desc">This amazing organization comes from the works of one of our collective’s Mother – Rico! Rico’s Mother, Chigozie, founded this non-profit organization with the focus of providing essential needs to those that need them. Specifically, pregnant and disabled individuals around the world. They provide these individuals with food, clothing, and shelter. A true act of humanity. One of their projects was based in Nigerian hinterlands, where they personally brought light to over 200 lives. Help this organization assist more lives!</p>
                                    <div className="buttons-container">
                                        <Link target="_blank" to="https://www.loisflirefoundation.org.ng/partner-with-us/" >
                                            <button className="donate-button">Donate</button>
                                        </Link>
                                        &nbsp;
                                        &nbsp;
                                        <Link target="_blank" to='https://www.facebook.com/LoisFLIREorganisation/'>
                                            <button className="learn-more-button">Learn More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="donation-option">
                                <div className="org-image">
                                    <img id='org-pic' src={warmHearts} />
                                </div>
                                <div className="about-org">
                                    <p id='organization-name'>Warm Hearts Foundation</p>
                                    <p className="org-desc">This is yet another wonderful organization that a member of our collective is connected to! Jordan’s mother, Monase, is part of a non-profit organization called “The Warm Hearts Foundation”. This organization benefits the less fortunate by providing shelter, clean water, educational opportunities, and much more. The Warm Hearts Foundation has a plan to “work with our partners in Kenya and Malawi to initiate and implement projects which will make a positive difference in the lives of the poor and disadvantaged in those countries by improving their health, education, and ultimately leading to self determination,“. They have projects committed to classroom construction, water irrigation, and so much more. Truly a heartwarming group of individuals bringing real change into the world</p>
                                    <div className="buttons-container">
                                        <Link to='https://warmheartsfoundation.org/donate/' target='_blank'>
                                            <button className="donate-button">Donate</button>
                                        </Link>
                                        &nbsp;
                                        &nbsp;
                                        <Link target="_blank" to='https://www.warmheartsfoundation.org/about'>
                                            <button className="learn-more-button">Learn More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="donation-option">
                                <div className="org-image">
                                    <img src={lebanon} />
                                </div>
                                <div className="about-org">
                                    <p id='organization-name'>Beirut Heritage Initiative</p>
                                    <p className="org-desc">With the explosion that occurred on the ports in Beirut on August 4th, many buildings possessing cultural significance and history were destroyed. This also meant that many families were displaced without a home. The Beirut Heritage Initiative is committed to restoring these buildings, further strengthening the cultural bond that these buildings held on the Lebanese people and bringing them back to their shelter.</p>
                                    <div className="buttons-container">
                                        <Link target='_blank'>
                                            <button className="donate-button" to='https://beirutheritageinitiative.com/donate/'>Donate</button>
                                        </Link>
                                        &nbsp;
                                        &nbsp;
                                        <Link to='https://beirutheritageinitiative.com/who-we-are/' target='_blank' >
                                            <button className="learn-more-button">Learn More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="donation-option">
                                <div className="org-image">
                                    <img src={redCross} />
                                </div>
                                <div className="about-org">
                                    <p id='organization-name'>Lebanese Red Cross</p>
                                    <p className="org-desc">My people of Lebanon have been living in a nightmare. From the on-going economic crisis to the explosion that occurred in Beirut on August 4th of 2020, along with the pandemic, the Lebanese population has yet to catch a break. Many families struggle with their financial situations, and more importantly, struggle to feed themselves. The Lebanese Red Cross is on the forefront of commitment to temporarily bringing ease to these struggles. All together, the Lebanese Red Cross has brought aid to over 200,000 individuals in Lebanon. Despite their terrific efforts, the country is still in distress. Help us out!</p>
                                    <div className="buttons-container">
                                        <Link to='https://www.supportlrc.app/' target='_blank'>
                                            <button className="donate-button">Donate</button>
                                        </Link>
                                        &nbsp;
                                        &nbsp;
                                        <Link to='https://www.redcross.org.lb/' target='_blank'>
                                            <button className="learn-more-button">Learn More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="donation-option">
                                <div className="org-image">
                                    <img src={alawaa} />
                                </div>
                                <div className="about-org">
                                    <p id='organization-name'>Al-Awda</p>
                                    <p className="org-desc">As the world has seen for decades on end, the indigeneity of Palestinians is being actively erased. Al-Awda is committed to halting this erasure, to uplift the voices of Palestinians who fight for their land, and to assure that what is lost is rightfully returned. Essentially, Al-Awda is committed to the Palestinian right of return. On a daily basis, Palestinians are subjected to losing their homes – their property that has been passed through generations. Palestinians are fighting for the right to their existence. They have been fighting for over 70 years. Help them now, through Al-Awda.</p>
                                    <div className='buttons-container'>
                                        <Link to='https://al-awda.org/give/' target='_blank'>
                                            <button className="donate-button">Donate</button>
                                        </Link>
                                        &nbsp;
                                        &nbsp;
                                        <Link to='https://al-awda.org/about/our-aims-and-objectives/' target='_blank'>
                                            <button className="learn-more-button">Learn More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-nav-container" style={{ paddingBottom: "50px", marginTop: "50px", display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%", backgroundColor: "#ffa30d", borderTop: "1px solid #d41d1d" }}>
                            <div className="stay-connected" style={{ display: "flex", flexDirection: "column" }}>
                                <h2>Stay Connected</h2>
                                <Link style={{ textDecoration: "none", color: "#d41d1d" }} to={"https://www.twitter.com/aliezzobezzo"} target="_blank">
                                    <i class="fa-brands fa-twitter fa-2x"></i>
                                    &nbsp;
                                    @AliEzzoBezzo
                                </Link>
                                &nbsp;
                                <Link to='https://www.instagram.com/aliezedine' target="_blank" style={{ textDecoration: "none", color: "#d41d1d" }}>
                                    <i class="fa-brands fa-instagram fa-2x"></i>
                                    &nbsp;
                                    @aliezedine
                                </Link>
                                &nbsp;
                                <Link to='https://www.tiktok.com/@YouWillKnowAloushi' target="_blank" style={{ textDecoration: "none", color: "#d41d1d" }}>
                                    <i class="fa-brands fa-tiktok fa-2x"></i>
                                    &nbsp;
                                    @YouWillKnowAloushi
                                </Link>
                                <p style={{ color: "#d41d1d", fontSize: "10px", marginTop: "50px" }}>© 2023 You Will Know Ali All Rights Reserved</p>
                            </div>
                            <div className="ali-logo">
                                <Link to="/">
                                    <img style={{ width: "200px", height: "200px", paddingTop: "20px" }} src={aliLogo} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default DonationPage
