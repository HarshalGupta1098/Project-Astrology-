import React from 'react'
import sign1 from './assets/images/zodiac_sign.jpg'

const data = [
    {
        sign: "Aries",
        fromDate: "March 21",
        toDate: "April 19"
    },

    {
        sign: "Aries",
        fromDate: "March 21",
        toDate: "April 19"
    },

    {
        sign: "Aries",
        fromDate: "March 21",
        toDate: "April 19"
    },

    {
        sign: "Aries",
        fromDate: "March 21",
        toDate: "April 19"
    },

    {
        sign: "Aries",
        fromDate: "March 21",
        toDate: "April 19"
    },

    {
        sign: "Aries",
        fromDate: "March 21",
        toDate: "April 19"
    },

    {
        sign: "Aries",
        fromDate: "March 21",
        toDate: "April 19"
    },

    {
        sign: "Aries",
        fromDate: "March 21",
        toDate: "April 19"
    },

    {
        sign: "Aries",
        fromDate: "March 21",
        toDate: "April 19"
    },

    {
        sign: "Aries",
        fromDate: "March 21",
        toDate: "April 19"
    },

    {
        sign: "Aries",
        fromDate: "March 21",
        toDate: "April 19"
    },

    {
        sign: "Aries",
        fromDate: "March 21",
        toDate: "April 19"
    },
]

function Horoscope() {
    return (
        <>
            <div>
                <h1>Daily Horoscopes</h1>
                <p
                style={{marginTop: "10px"}}
                >Read your daily horoscope based on your sunsign, select
                    your zodiac sign and give the right start to your day.
                </p>


                <div style={{display: "grid", gridTemplateColumns: "repeat(7, max-content)"}}>
                {
                    data.map((item) => (
                        <div style={{margin: "40px 10px"}}>
                            <img
                            style={{width: "100px", height: "100px"}} 
                            src={sign1} alt="zodiac sign" />
                            <h4 style={{marginLeft:"-25px", textAlign: "center"}}>{item.sign}</h4>
                            <p style={{marginLeft: "-10%"}}>{item.fromDate} - {item.toDate}</p>
                        </div>
                    ))
                }
                </div>

            </div>
        </>
    )
}

export default Horoscope
