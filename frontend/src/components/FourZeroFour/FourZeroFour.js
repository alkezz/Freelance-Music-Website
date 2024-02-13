import React from "react";
import logo from "../../assets/aliPictureLogo.png"
import "./FourZeroFour.css"

const FourZeroFour = () => {
    document.title = "YWK Ali | 404";
    return (
        <div className="four-oh-four">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ fontSize: '90px' }}>4</h1>
                <img alt="logo" style={{ width: "300px", height: "200px" }} src={logo} />
                <h1 style={{ fontSize: '90px' }}>4</h1>
            </div>
            <p className="p-el">Woah, looks like you took a wrong turn!</p>
            <h1>Let's get you back <a style={{ color: "#f5deb3" }} href="/">home</a></h1>
        </div>
    )
}

export default FourZeroFour;
