import React, { useState } from 'react'
import AstroRow from './AstroRow'


function Searchbar() {
    const [query, setQuery] = useState("")
    console.log(query)
    return (
        <>
            <div>
                <input
                style={{width: "100%", height: "50px", fontSize:"20px", marginTop: "30px"}} 
                type="text" 
                placeholder="Search Astrologer"
                value={query}
                onChange={(event) => setQuery(event.target.value)}/>

                <AstroRow searchQuery={query}/>
            </div>
        </>
    )
}

export default Searchbar
