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
    document.title = 'YWK Ali | Donate';
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
    //If Images arent loaded we wait for them before showing the pages
    // if (!lois || !warmHearts || !lebanon || !redCross || !alawaa) return null
    return (
        <h1>yo</h1>
    )
}

export default DonationPage
