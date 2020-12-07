import React, { useState } from 'react'

function Search() {

    const [cardName, setCardName] = useState("")
    const [cardSet, setCardSet] = useState("")
    // const [searchParams, setSearchParams] = useState("")

    function fetchSearch(searchTerm) {
        fetch(`https://api.magicthegathering.io/v1/cards?${cardName}`)
        .then(resp => resp.json())
        .then(results => console.log(results))
    }

    function handleCardName(e) {
        setCardName(e.target.value)
    }
    
    function handleCardSet(e) {
        setCardSet(e.target.value)
    }
    
    function searchCards(e) {
        e.preventDefault();
    }
    
    return(
        <div>
            Search Component
            <form>
                <input onChange={handleCardName} type='text' name='card name' placeholder='Card Name' /><br></br>
                <input onChange={handleCardSet} type='text' name='set' placeholder='Card Set' /><br></br>
                <button onClick={searchCards} type='submit'>Search</button>
            </form>
        </div>
    )
}

export default Search;