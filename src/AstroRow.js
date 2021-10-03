import React from 'react'
import astro_profile_pic from './assets/images/astro1.jpg'
import best_price from './assets/icons/best-price.png'
import logical_thinking from './assets/icons/logical-thinking.png'
import translate from './assets/icons/translation.png'
import phone_call from './assets/icons/phone-call.png'

// dummy astrologer data
let data = [
    {
        image: "path",
        name: "Divya Kumar Bhardwaj",
        skill: ["vastu", "coffee cup reading"],
        language: ["hindi", "english"],
        rate: 100,
        experience: 4
    },

    {
        image: "path",
        name: "Divya Kumar Bhardwaj",
        skill: ["vastu", "coffee cup reading"],
        language: ["hindi", "english"],
        rate: 100 ,
        experience: 4
    }
]

function AstroRow(props) {
    let searchQuery = props.searchQuery
    console.log(searchQuery)

    function capitilize(arr){
        for(let i = 0; i < arr.length; i++){
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length)
        }
        return arr
    }

    function selectData(){
        if(!searchQuery){
            return data
        }
        else{
            searchQuery = searchQuery.toLowerCase()
            searchQuery = searchQuery.trim()
            let newData = [];
            for(let i = 0; i < data.length; i++){
                let NAME = data[i].name
                console.log("NAME", NAME)
                NAME = NAME.toLowerCase()
                NAME = NAME.split(" ")
                console.log("NAME", NAME)
                for(let j = 0; j < NAME.length; j++){
                    if(searchQuery.localeCompare(NAME[j]) === 0){
                        console.log(data[i])
                        newData.push(data[i])       
                    }
                    
                }
            }
            return newData
        }
    }

    data = selectData()
    console.log("data of astroRow fils -> ", data)
    return (
        <>
        {
            data.map((item) => (
                <div style=
                {{display: "flex", 
                margin: "70px 0px 70px 0px"
                }}>
                    <img 
                    style={{width: "200px", height: "200px"}}
                    src={astro_profile_pic} alt="astro profile" />
                    <div style={{marginLeft: "50px"}}>
                        <h1>{item.name}</h1>
                        <div>
                            <p>
                                <img src={logical_thinking} 
                                style={{
                                    width: "40px", 
                                    height: "40px",
                                    marginRight: "15px"
                                }}/>
                                {(capitilize(item.skill)? capitilize(item.skill).join(", ") : null)}
                            </p>
                            <p>
                                <img src={translate} 
                                style={{
                                    width: "40px", 
                                    height: "40px",
                                    marginRight: "15px"
                                }}/>
                                {(capitilize(item.language)? capitilize(item.language).join(", ") : null)}
                            </p>
                            <p 
                            style={{fontWeight: "bold"}}
                            >
                                <img src={best_price} 
                                style={{
                                    width: "40px", 
                                    height: "40px",
                                    marginRight: "15px"
                                }}/>
                                ₹ {item.rate} / Min
                            </p>

                            <button
                            style={{
                                padding: "20px", 
                                marginTop: "30px",
                                borderRadius: "10px",
                                width: "200px",
                                backgroundColor: "#ff5727",
                                color: "white",
                                border: "none"
                            }}
                            >
                                <img src={phone_call} 
                                style={{
                                    width: "40px", 
                                    height: "40px",
                                    margin: "0px 15px -22px 0px"
                                }}/>
                                Talk on Call</button>
                        </div>
                    </div>
                    <p style={{
                        marginLeft: "60px", 
                        marginTop: "3px", 
                        fontSize: "30px"}}
                    >
                        {item.experience} Years
                    </p>
                </div>
            ))
        }
        </>
    )
}

export default AstroRow
