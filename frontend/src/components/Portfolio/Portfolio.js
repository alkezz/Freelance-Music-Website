import React from 'react';
import { Link } from "react-router-dom"

const Portfolio = () => {

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "70%" }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ marginRight: "100px", marginTop: "25%" }}>
                        <img style={{ width: "50px", height: "50px" }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Purple_website.svg/1200px-Purple_website.svg.png' />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div>
                            <h1 style={{ fontFamily: "bright" }}>General Statement</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel euismod eros, ut vulputate erat. Phasellus quam orci, porta quis bibendum vitae, auctor ut lectus. Duis vehicula mi at ornare placerat. Curabitur consectetur lacus nisl, eu placerat orci suscipit sed. Vestibulum cursus et urna ut accumsan. Cras pellentesque mollis mauris, vulputate finibus justo dapibus a. Sed tincidunt dui sed justo fringilla, et condimentum ipsum ultrices. Duis ac ullamcorper massa. Quisque gravida risus vel convallis gravida. Sed eu purus tincidunt, placerat mi sit amet, mollis sapien. Vestibulum orci sem, sollicitudin sit amet odio in, suscipit laoreet neque. Nam aliquet lacus at condimentum laoreet. Donec fermentum, odio quis malesuada tincidunt, orci ante lobortis ipsum, id facilisis urna turpis at elit.
                            </p>
                            <p>
                                Aliquam blandit justo vel lacus dictum, et molestie turpis scelerisque. Ut et nisl in tortor scelerisque fringilla. Donec nec nisi sed magna tempor sollicitudin. Phasellus maximus accumsan pellentesque. Curabitur laoreet massa quis pellentesque bibendum. Nunc feugiat nisl at lobortis ultrices. Quisque porttitor massa at porta gravida. Morbi vitae erat porta, vestibulum nibh ut, eleifend neque. Ut nec ex orci. Phasellus malesuada turpis non orci aliquet, sit amet ullamcorper odio posuere. Nam vel purus neque. Nulla enim odio, posuere condimentum accumsan ac, porttitor non elit.
                            </p>
                            <p>
                                Aliquam blandit justo vel lacus dictum, et molestie turpis scelerisque. Ut et nisl in tortor scelerisque fringilla. Donec nec nisi sed magna tempor sollicitudin. Phasellus maximus accumsan pellentesque. Curabitur laoreet massa quis pellentesque bibendum. Nunc feugiat nisl at lobortis ultrices. Quisque porttitor massa at porta gravida. Morbi vitae erat porta, vestibulum nibh ut, eleifend neque. Ut nec ex orci. Phasellus malesuada turpis non orci aliquet, sit amet ullamcorper odio posuere. Nam vel purus neque. Nulla enim odio, posuere condimentum accumsan ac, porttitor non elit.
                            </p>
                        </div>
                        <div>
                            <h1 style={{ fontFamily: "bright" }}> Career Planning</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel euismod eros, ut vulputate erat. Phasellus quam orci, porta quis bibendum vitae, auctor ut lectus. Duis vehicula mi at ornare placerat. Curabitur consectetur lacus nisl, eu placerat orci suscipit sed. Vestibulum cursus et urna ut accumsan. Cras pellentesque mollis mauris, vulputate finibus justo dapibus a. Sed tincidunt dui sed justo fringilla, et condimentum ipsum ultrices. Duis ac ullamcorper massa. Quisque gravida risus vel convallis gravida. Sed eu purus tincidunt, placerat mi sit amet, mollis sapien. Vestibulum orci sem, sollicitudin sit amet odio in, suscipit laoreet neque. Nam aliquet lacus at condimentum laoreet. Donec fermentum, odio quis malesuada tincidunt, orci ante lobortis ipsum, id facilisis urna turpis at elit.
                            </p>
                            <p>
                                Aliquam blandit justo vel lacus dictum, et molestie turpis scelerisque. Ut et nisl in tortor scelerisque fringilla. Donec nec nisi sed magna tempor sollicitudin. Phasellus maximus accumsan pellentesque. Curabitur laoreet massa quis pellentesque bibendum. Nunc feugiat nisl at lobortis ultrices. Quisque porttitor massa at porta gravida. Morbi vitae erat porta, vestibulum nibh ut, eleifend neque. Ut nec ex orci. Phasellus malesuada turpis non orci aliquet, sit amet ullamcorper odio posuere. Nam vel purus neque. Nulla enim odio, posuere condimentum accumsan ac, porttitor non elit.
                            </p>
                            <p>
                                Aliquam blandit justo vel lacus dictum, et molestie turpis scelerisque. Ut et nisl in tortor scelerisque fringilla. Donec nec nisi sed magna tempor sollicitudin. Phasellus maximus accumsan pellentesque. Curabitur laoreet massa quis pellentesque bibendum. Nunc feugiat nisl at lobortis ultrices. Quisque porttitor massa at porta gravida. Morbi vitae erat porta, vestibulum nibh ut, eleifend neque. Ut nec ex orci. Phasellus malesuada turpis non orci aliquet, sit amet ullamcorper odio posuere. Nam vel purus neque. Nulla enim odio, posuere condimentum accumsan ac, porttitor non elit.
                            </p>
                        </div>
                    </div>
                    <div style={{ marginLeft: "100px", marginTop: "25%" }}>
                        <img style={{ width: "50px", height: "50px" }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Purple_website.svg/1200px-Purple_website.svg.png' />
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div>
                        <Link style={{ color: "black", fontFamily: "bright" }}><h1>Resume</h1></Link>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h1 style={{ fontFamily: "bright" }}>Research Methods</h1>
                        <Link style={{ color: "black" }}>Paper</Link>
                        <br />
                        <Link style={{ color: "black" }}>Poster</Link>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h1 style={{ fontFamily: "bright" }}>Notable Work</h1>
                        <Link style={{ color: "black" }}>
                            Malcolm In the Middle
                        </Link>
                        <br />
                        <Link style={{ color: "black" }}>
                            Other paper
                        </Link>
                    </div>
                </div>
                <br />
            </div>
        </div >
    )
}

export default Portfolio
