import React from 'react'
import home from './assets/home.png'
import reports from './assets/reports.png'
import talk from './assets/talk.png'
import ask from './assets/ask.png'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <>
        <div style={{display: "flex", justifyContent: "space-between"}}>

            <Link to="/" style={{color: "black", textDecorationLine: "none"}}>
                <div style={{textAlign: "center", fontSize: "20px"}}>
                    <img style={{width: "50px", height: "50px"}}src={home} alt="home" />
                    <p>Home</p>
                </div>
            </Link>

            <Link to="/talk" style={{color: "black", textDecorationLine: "none"}}>
                <div style={{textAlign: "center", fontSize: "20px"}}>
                    <img style={{width: "50px", height: "50px"}} src={talk} alt="talk" />
                    <p>Talk to Astrologer</p>
                </div>
            </Link>
            
            <div style={{textAlign: "center", fontSize: "20px"}}>
                <img style={{width: "50px", height: "50px"}}src={ask} alt="ask" />
                <p>Ask Question</p>
            </div>

            <div style={{textAlign: "center", fontSize: "20px"}}>
                <img style={{width: "50px", height: "50px"}}src={reports} alt="reports" />
                <p>Reports</p>
            </div>
            
        </div>
        </>
    )
}

export default Footer
