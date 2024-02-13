import React from 'react';
import { Link } from "react-router-dom"
import cv from "../../assets/papers/Ezedine-A-CV.pdf"
import resume from "../../assets/papers/Ezedine-Ali-Resume.pdf"
import malcom from "../../assets/papers/Malcolm In The Middle Teen Media Analysis - Ali Junior Ezedine.pdf"
import menopause from "../../assets/papers/Ezedine-A-Menopause.pdf"
import poster from "../../assets/papers/Ezedine-A-Poster.pdf"
import paper from "../../assets/papers/Ezedine-A-Proposal.pdf"
document.body.style.backgroundColor = '#181a1b'
const Portfolio = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", color: "white", marginTop: "50px", flexDirection: "column", alignItems: "center", backgroundColor: "#181a1b", paddingBottom: "150px" }}>
            <div style={{ width: "70%" }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ marginRight: "100px", marginTop: "25%" }}>
                        <img style={{ position: 'sticky', top: '100px', width: "150px", height: "150px", backgroundColor: 'white' }} src='https://www.easternct.edu/university-relations/_images/blue-stacked-transparent-23.png' />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div>
                            <h1 style={{ fontFamily: "bright" }}>General Statement</h1>
                            <p style={{ fontFamily: "Times New Roman", fontSize: "18px" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My journey at Eastern has been a robust training ground for a spectrum of invaluable skills sought after in today's professional landscape. Through courses spanning evolutionary psychology, social psychology, adolescent psychology, and research methods, I've honed my critical thinking prowess. Crafting papers within these domains provided me ample opportunities to showcase my adeptness in identifying needs, contextualizing situations, and performing logical analyses—an integral facet of critical thinking.
                            </p>
                            <p style={{ fontFamily: "Times New Roman", fontSize: "18px" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Communication emerged as a cornerstone of my academic tenure. I've consistently demonstrated an aptitude for effectively exchanging information, ideas, and perspectives, both within the academic realm and in interactions extending beyond the institution's confines. This capacity to articulate thoughts and substantiate viewpoints has been pivotal in my academic journey.
                            </p>
                            <p style={{ fontFamily: "Times New Roman", fontSize: "18px" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My engagement in group projects at Eastern unfurled an unexpected but welcomed forte in leadership. Recognizing personal and collective strengths, I often found myself assuming leadership roles, steering teams towards organizational goals, and capitalizing on our combined strengths to achieve success.
                            </p>
                            <p style={{ fontFamily: "Times New Roman", fontSize: "18px" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Collaborative dynamics have been an inherent part of my academic tenure. Working towards shared goals, appreciating diverse viewpoints, and shouldering collective responsibilities have been pivotal aspects of my approach to teamwork.
                            </p>
                            <p style={{ fontFamily: "Times New Roman", fontSize: "18px" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Overcoming hurdles while mastering tools like SPSS and R showcased my adaptability and ethical leveraging of technology to augment efficiencies and accomplish tasks efficiently.
                            </p>
                            <p style={{ fontFamily: "Times New Roman", fontSize: "18px" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Presenting my research at an Eastern-hosted event not only epitomized professionalism but also provided a platform to hone public speaking skills within my academic domain. Furthermore, my academic pursuits have broadened my perspective, fostering an understanding and appreciation for diverse cultural viewpoints, underscoring the significance of equity and inclusion.
                            </p>
                            <p style={{ fontFamily: "Times New Roman", fontSize: "18px" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Recognizing the perpetual need for personal and professional growth, I am fervently committed to continual learning and self-assessment. This commitment includes astutely identifying my strengths and weaknesses, coupled with strategic networking to fortify relationships essential for my career progression.
                            </p>
                            <p style={{ fontFamily: "Times New Roman", fontSize: "18px" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Eastern has not only equipped me with a degree but also nurtured a comprehensive skill set, arming me with competencies imperative for navigating the dynamic professional terrain ahead.
                            </p>
                        </div>
                        <div>
                            <h1 style={{ fontFamily: "bright" }}> Career Planning</h1>
                            <p style={{ fontFamily: "Times New Roman", fontSize: "18px" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the next couple of years, my primary focus is on pursuing a Master's in clinical social work immediately following my undergraduate studies. This will lay the foundation for my short-term goal of establishing a private practice in therapy and social work, with a particular emphasis on serving my community. The action plan to achieve this involves attending graduate school while concurrently working part-time as a paraprofessional at Oak Hill Schools. This dual commitment is scheduled between 2024 and 2027. I am fortunate to have established a genuine relationship with the team at Oak Hill, who have graciously offered me a part-time position to support my education. My cultural background and upbringing, which prioritize education, provide the foundational resources for this endeavor. The unwavering support of my family serves as a crucial pillar in acquiring the experience needed to navigate this transitional phase.
                            </p>
                            <p style={{ fontFamily: "Times New Roman", fontSize: "18px" }}>
                                Long-Term Career Goals and Action Plan:
                            </p>
                            <p style={{ fontFamily: "Times New Roman", fontSize: "18px" }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Looking beyond the next five years, my long-term goal is to establish a community center that caters to the needs of my community, offering a comprehensive range of services such as therapy, a gym, daycare, and music lessons. Simultaneously, I aim to undertake research to enhance community interactions. Additionally, I aspire to engage in local politics after 2035. The action plan entails the establishment of the community center, implementation of a retreat program doubling as a rehabilitation initiative for individuals struggling with addiction, and eventually running for local political office. Achieving this will require an extensive network, financial prudence, and diverse experiences gained along the way. My Psi Chi membership at Eastern will be pivotal in fostering connections, while the support of my family and friends will be instrumental in acquiring the necessary experiences and financial resources. This concerted effort will contribute to creating a lasting impact on my community and beyond.
                            </p>
                        </div>
                    </div>
                    <div style={{ marginLeft: "100px", marginTop: "25%" }}>
                        <img style={{ position: 'sticky', top: '100px', width: "150px", height: "150px", backgroundColor: "white" }} src='https://www.easternct.edu/university-relations/_images/blue-stacked-transparent-23.png' />
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div>
                        <a target="_blank" rel="noreferrer" href={resume} style={{ color: "white", fontFamily: "bright" }}><h1>Resume</h1></a>
                    </div>
                    <div>
                        <a rel="noreferrer" target="_blank" href={cv} style={{ color: "white", fontFamily: "bright" }}><h1>CV</h1></a>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h1 style={{ fontFamily: "bright" }}>Research Methods</h1>
                        <a rel="noreferrer" target="_blank" href={paper} style={{ color: "white" }}>Paper</a>
                        <br />
                        <a rel="noreferrer" target="_blank" href={poster} style={{ color: "white" }}>Poster</a>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h1 style={{ fontFamily: "bright" }}>Notable Work</h1>
                        <a rel="noreferrer" target="_blank" href={malcom} style={{ color: "white" }}>
                            Malcolm In the Middle Paper
                        </a>
                        <br />
                        <a rel="noreferrer" target="_blank" href={menopause} style={{ color: "white" }}>
                            Menopause Paper
                        </a>
                    </div>
                </div>
                <br />
            </div>
        </div >
    )
}

export default Portfolio
