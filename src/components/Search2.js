import React, { useEffect, useState } from 'react'
import Results from './Results'

function Search() {

    let baseUrl = 'https://api.scryfall.com'

    const [cardName, setCardName] = useState('')
    const [searchResults, setSearchResults] = useState([])

    function fetchSearch() {
        fetch(searchUrl)
        .then(resp => resp.json())
        .then(results => setSearchResults(results))
    }

    function handleCardName(e) {
        setCardName(e.target.value);
        handleSearchUrl();
    }

    function handleSearchUrl() {

    }

    return(
        <div>
            Search Component
            <form>
                <input onChange={handleCardName} type='text' name='card name' placeholder='Card Name' /><br></br>
            </form>
        </div>
    )


}

export default Search;