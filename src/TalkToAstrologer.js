import React from 'react'
import { useState } from 'react'
import Searchbar from './Searchbar'
import search from './assets/search.png'
import sort from './assets/sort.png'
import filter from './assets/filter.png'
import AstroRow from './AstroRow'



function TalkToAstrologer() {
    const [sortState, setSortState] = useState(false)
    const [state, setState] = useState(false)

    const showSearch = () => {
        setState(true)
    }

    const showSort = () => {
        setSortState(true)
    }

    return (
        <>
        <div style={{display: "flex", justifyContent: "flex-end", paddingTop: "50px"}}>
            <h4 style={{
                position: "relative", 
                marginRight: "70%",
                fontSize: "30px"
                }}
            >Talk to an Astrologer</h4>
            <img
            style={{width:"30px", height: "30px", marginRight: "20px"}}
            src={search} onClick={showSearch} alt="search"/>

            <img
            style={{width:"30px", height: "30px", marginRight: "20px"}}
            src={sort} onClick={showSort} alt="search"/>

            <img 
            style={{width:"30px", height: "30px", marginRight: "10px"}}
            src={filter} alt="search"/>
        </div>

        <div>{sortState? <div style={{
                width: "190px", 
                height: "120px",
                padding: "10px",
                marginLeft: "85%",
                boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.4)"
                }}
            >
                <ul
                style={{marginLeft: "-70px"}}
                >
                    <ul>Sort</ul>
                    <ul><hr /></ul>
                    <ul style={{marginTop: "3px"}}>Experience - high to low</ul>
                    <ul style={{marginTop: "3px"}}>Experience - low to high</ul>
                    <ul style={{marginTop: "3px"}}>Price - high to low</ul>
                    <ul style={{marginTop: "3px"}}>Price - low to high</ul>
                </ul>
            </div> : null}</div>

        <div>{state? <Searchbar />: null}</div>
        <div><AstroRow /></div>
        </>
    )
}

export default TalkToAstrologer
