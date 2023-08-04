import React from "react";
import logo from "../../assets/aliPictureLogo.png"
import "./FourZeroFour.css"

const FourZeroFour = () => {
    return (
        <div className="four-oh-four" style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh", justifyContent: "center", cursor: "default", color: "#f5deb3" }}>
            <img style={{ width: "300px", height: "200px" }} src={logo} />
            <h1>Woah, looks like you took a wrong turn somewhere!</h1>
            <h1>Let's get you back <a style={{ color: "#f5deb3" }} href="/">home</a></h1>
        </div>
    )
}

export default FourZeroFour;
