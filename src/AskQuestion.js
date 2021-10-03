import React, { useState } from 'react'
import profile from './assets/profile.png'

const data = [
    {
        review: "Commodo reprehenderit laborum mollit aliqua. Reprehenderit proident Lorem commodo magna irure ex anim ex Lorem in eu. In duis nostrud tempor minim incididunt nostrud dolore. Velit fugiat tempor anim fugiat esse aliquip esse ipsum commodo nisi ad. Elit exercitation commodo ullamco cupidatat sit incididunt quis in. Mollit duis deserunt ut proident. Id sint mollit consequat ullamco fugiat aute anim. Occaecat adipisicing nostrud occaecat ex. Consectetur consectetur do eiusmod ullamco mollit esse fugiat eu excepteur est minim. Cillum adipisicing nulla magna officia do Lorem esse magna exercitation commodo voluptate amet ipsum excepteur.",
        name: "Gagan Deep",
        city: "Bhopal",
        country: "India"
    },
    {
        review: "Commodo reprehenderit laborum mollit aliqua. Reprehenderit proident Lorem commodo magna irure ex anim ex Lorem in eu. In duis nostrud tempor minim incididunt nostrud dolore. Velit fugiat tempor anim fugiat esse aliquip esse ipsum commodo nisi ad. Elit exercitation commodo ullamco cupidatat sit incididunt quis in. Mollit duis deserunt ut proident. Id sint mollit consequat ullamco fugiat aute anim. Occaecat adipisicing nostrud occaecat ex. Consectetur consectetur do eiusmod ullamco mollit esse fugiat eu excepteur est minim. Cillum adipisicing nulla magna officia do Lorem esse magna exercitation commodo voluptate amet ipsum excepteur.",
        name: "Gagan Deep",
        city: "Bhopal",
        country: "India"
    },
    {
        review: "Commodo reprehenderit laborum mollit aliqua. Reprehenderit proident Lorem commodo magna irure ex anim ex Lorem in eu. In duis nostrud tempor minim incididunt nostrud dolore. Velit fugiat tempor anim fugiat esse aliquip esse ipsum commodo nisi ad. Elit exercitation commodo ullamco cupidatat sit incididunt quis in. Mollit duis deserunt ut proident. Id sint mollit consequat ullamco fugiat aute anim. Occaecat adipisicing nostrud occaecat ex. Consectetur consectetur do eiusmod ullamco mollit esse fugiat eu excepteur est minim. Cillum adipisicing nulla magna officia do Lorem esse magna exercitation commodo voluptate amet ipsum excepteur.",
        name: "Gagan Deep",
        city: "Bhopal",
        country: "India"
    }
]
function AskQuestion() {
    const [optionsState, setOptionsState] = useState(false)
    const showOptions = () => {
        setOptionsState(true)
    }
    return (
        <div>
            <h1 >Ask a Question</h1>
            <p style={{marginTop: "10px"}}>Seek accurate answers to your life problems and guide you towards the right path.
            Whether the problem is related to love, self, life, business, money, education or work,
            our astrologers will do an in depth study of your birth chart, provide personalized
            responses along with remedies.</p>

            {/* dropdown menu section */}
            <div style={{
                marginTop: "30px", 
                backgroundColor: "lightgrey",
                width: "max-content",
                padding: "10px"
                }}
            >
                <h4>Choose Category</h4>
                <div style={{
                    border: "1px none", 
                    padding: "10px", 
                    backgroundColor: "white",
                    width: "270px",
                    marginTop: "10px",
                    marginBottom: "10px"
                    }}>
                    <label onClick={showOptions}>Select a category: Love, career, more</label>

                    {optionsState? <ul style={{marginLeft: "-70px"}}>
                        <ul>Love</ul>
                        <ul>Career</ul>
                        <ul>Health</ul>
                        <ul>Family</ul>
                    </ul> : null}
                </div>

                <div style={{display: "flex"}}>
                    <p>Rs. 99 (Including GST)</p>
                    <p style={{marginLeft: "15px"}}>Ideas what to ask</p>
                    <button style={{
                        marginLeft: "20px",
                        backgroundColor: "#ff5727",
                        color: "white",
                        border: "none",
                        padding: "5px"}}>Ask a question</button>
                </div>
            </div> 

            {/* Customer section */}
            
            <h1 style={{marginTop: "50px"}}>Hear from our Happy Customers!</h1>
            <div style={{display: "grid", gridTemplateColumns: "repeat(3, min-content)", padding: "40px 0px 80px 0px"}}>
                {
                    data.map((item) => (
                        <div style={{
                        border: "1px none",
                        width: "400px",
                        flex: "0 1 24%",    
                        boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.4)",
                        margin: "4px 16px",
                        transition: "0.3s"}}
                        >
                        <p style={{padding: "30px"}}>{item.review}</p>
                        <div style={{padding: "20px", backgroundColor: "lightgrey", textAlign: "center"}}>
                            <img 
                            style={{width: "50px", height: "50px", position: "relative", top: "-40px"}}
                            src={profile} alt="profile" />
                            <p style={{fontSize: "30px", position: "relative", top: "-40px"}}>{item.name}</p>
                            <p style={{fontSize: "15px", position: "relative", top: "-30px"}}>{item.city}, {item.country}</p>
                        </div>

                    </div>))
                    
                }
            </div>
        </div>
    )
}

export default AskQuestion
