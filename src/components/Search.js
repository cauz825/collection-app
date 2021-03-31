import React, { useState } from 'react'
import Results from './Results'

function Search() {

    let baseUrl = 'https://api.magicthegathering.io/v1/cards?'

    const [cardName, setCardName] = useState("")
    const [cardSet, setCardSet] = useState("")
    const [cardColor, setCardColor] = useState("")
    const [searchUrl, setSearchUrl] = useState(baseUrl)
    const [searchResults, setSearchResults] = useState([])

    function fetchSearch() {
        fetch(searchUrl)
        .then(resp => resp.json())
        .then(results => setSearchResults(results))
    }

    function handleCardName(e) {
        setCardName(e.target.value);
        handleSearchUrl()
    }
    
    function handleCardSet(e) {
        setCardSet(e.target.value);
        handleSearchUrl()
    }

    function handleCardColor(e) {
        setCardColor(e.target.value);
        handleSearchUrl()
    }
    
    function searchCards(e) {
        e.preventDefault();
        fetchSearch()
    }

    function handleSearchUrl() {
        let searchTerms = ""
        if(cardName && cardName.length > 0){
            searchTerms = `${searchTerms}&name=${cardName}`
        }
        if(cardSet && cardSet.length > 0){
            searchTerms = `${searchTerms}&setName=${cardSet}`
        }
        if(cardColor && cardColor.length > 0){
            searchTerms = `${searchTerms}&colors=${cardColor}`
        }
        setSearchUrl(`${baseUrl}${searchTerms}`)
    }

    return(
        <div>
            Search Component
            <form>
                <input onChange={handleCardName} type='text' name='card name' placeholder='Card Name' /><br></br>
                <input onChange={handleCardSet} type='text' name='set' placeholder='Card Set' /><br></br>
                <input onChange={handleCardColor} type='text' name='color' placeholder='Card Color' /><br></br>
                <button onClick={searchCards} type='submit'>Search</button>
            </form>
            <Results searchResults={searchResults} />
        </div>
    )
}

export default Search;