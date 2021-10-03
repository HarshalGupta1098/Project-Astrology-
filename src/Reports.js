import React from 'react'
import image2 from 'F:/Downloads/astro2.jpg'

function Reports() {
    return (
        <div>
            <h1>Reports</h1>
            <p style={{marginTop: "10px"}}>Astrology report or what is commonly known as Horoscope report is basically an
                in depth look at your birth chart. Horoscope report will look at various planetary
                positions in your birth charts and also derive relationshipsand angle to understand
                your personality and trait.
            </p>
            <img
            style={{width: "370px", height: "300px", borderRadius: "10px", marginLeft: "10px", marginTop: "40px"}} 
            src={image2} alt="report1" />

            <img
            style={{width: "370px", height: "300px", borderRadius: "10px", marginLeft: "10px"}} 
            src={image2} alt="report1" />

            <img
            style={{width: "370px", height: "300px", borderRadius: "10px", marginLeft: "10px"}} 
            src={image2} alt="report1" />
        </div>
    )
}

export default Reports
