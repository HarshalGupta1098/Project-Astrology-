import React from 'react'
import AskQuestion from './AskQuestion'
import Horoscope from './Horoscope'
import Reports from './Reports'
import astro_profile_pic from './assets/images/astro1.jpg'
import image2 from './assets/images/astro2.jpg'

const data = [
    {
        image: "path",
        name: "Divya Kumar Bhardwaj",
        skill: ["vastu", "coffee cup reading"],
        language: ["hindi", "english"],
        rate: 100,
        rating: 4.5
    },

    {
        image: "path",
        name: "Shiv Kumar Bhardwaj",
        skill: ["vastu", "coffee cup reading"],
        language: ["hindi", "english"],
        rate: 100 ,
        rating: 4.1
    },
    {
        image: "path",
        name: "Shiv Kumar Bhardwaj",
        skill: ["vastu", "coffee cup reading"],
        language: ["hindi", "english"],
        rate: 100 ,
        rating: 4.1
    },
    {
        image: "path",
        name: "Shiv Kumar Bhardwaj",
        skill: ["vastu", "coffee cup reading"],
        language: ["hindi", "english"],
        rate: 100 ,
        rating: 4.1
    },
    {
        image: "path",
        name: "Shiv Kumar Bhardwaj",
        skill: ["vastu", "coffee cup reading"],
        language: ["hindi", "english"],
        rate: 100 ,
        rating: 4.1
    }
]

function Home() {

    function capitilize(arr){
        for(let i = 0; i < arr.length; i++){
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length)
        }
        return arr
    }

    return (
        <>
            <div>
                {/* Banner section */}
                <div style={{display: "flex"}}>
                    <div>
                    <h1>""</h1>
                    <p style={{marginLeft: "30px", fontSize: "20px"}}>There is no better boat than horoscope to help a man cross over the
                        sea of life.
                    </p>
                    <h1 style={{marginLeft: "730px"}}>""</h1>
                    <p style={{marginLeft: "430px"}}> - Varahmihira</p>
                    </div>
                    <img
                    style={{width: "250px", height: "250px", 
                    marginLeft: "50px" }} 
                    src={astro_profile_pic} alt="astro"/>
                </div>

                <div style={{padding: "10px", marginTop: "50px"}}> 
                <img 
                    style={{width: "200px", height: "150px", borderRadius: "10px", marginRight: "20px"}}
                    src={image2} alt="ad"/>
                <img 
                    style={{width: "200px", height: "150px", borderRadius: "10px", marginRight: "20px"}}
                    src={image2} alt="ad"/>
                <img 
                    style={{width: "200px", height: "150px", borderRadius: "10px", marginRight: "20px"}}
                    src={image2} alt="ad"/>
                <img 
                    style={{width: "200px", height: "150px", borderRadius: "10px", marginRight: "20px"}}
                    src={image2} alt="ad"/>

                <img 
                    style={{width: "200px", height: "150px", borderRadius: "10px", marginRight: "20px"}}
                    src={image2} alt="ad"/>
                </div>

                {/* Daily horoscope section on home page */}
                <div style={{marginTop: "50px"}}>
                <Horoscope />
                </div>

                {/* Talk to astrologer section on home page */}
                <div style={{marginTop: "50px"}}>
                    <h1>Talk to an Astrologer</h1>
                    <p>Leading astrologers of India are just a phone call away. Our panel
                        of astrologers not just provides solutions to your life problems but also
                        guide you so that you can take the right path towards growth and prosperity.
                    </p>
                </div>

                <div style={{
                    display: "flex"
                }}>
                {
                    data.map((item) => (
                        
                            <div>
                                <img 
                                style={{width: "100px", height: "100px"}}
                                src={astro_profile_pic} alt="astrologer" />
                                <div style={{display: "flex"}}>
                                    <p
                                    style={{
                                        fontWeight: "bold"
                                    }}
                                    >{item.name}</p>
                                    <p
                                    style={{
                                        margin: "0px 50px",
                                        fontWeight: "bold",
                                        color: "#ff5727"
                                    }}
                                    >{item.rating}</p>
                                </div>
                                
                                <p
                                style={{margin: "10px 0px"}}
                                >{(capitilize(item.skill)? capitilize(item.skill).join(", ") : null)}</p>
                                <div style={{display: "flex"}}>
                                    <p
                                    style={{margin: "10px 0px"}}
                                    >₹{item.rate}/Min</p>
                                    <button
                                    style={{
                                        padding: "5px 15px 5px 15px", 
                                        margin: "10px 50px",
                                        backgroundColor: "#ff5727",
                                        color: "white",
                                        border: "none",
                                        padding: "5px",
                                        borderRadius: "4px"}}
                                    >Talk Now</button>
                                </div>
                            </div>       
                        
                    ))
                }
                </div>

                {/* Reports section */}
                <div style={{marginTop: "50px"}}>
                <Reports />
                </div>

                {/* Ask a Question section */}
                <div style={{marginTop: "50px"}}>
                <AskQuestion />
                </div>
            </div>
        </>
    )
}

export default Home
