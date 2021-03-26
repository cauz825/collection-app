import React, { useEffect, useState } from 'react'
// import Results from './Results'

function Search() {

    let baseUrl = 'https://api.scryfall.com'

    // const [cardName, setCardName] = useState('')
    // const [searchResults, setSearchResults] = useState([])

    // function fetchSearch() {
    //     fetch(searchUrl)
    //     .then(resp => resp.json())
    //     .then(results => setSearchResults(results))
    // }

    // function handleCardName(e) {
    //     setCardName(e.target.value);
    //     handleSearchUrl();
    // }

    // function handleSearchUrl() {

    // }

    return(
        <div>
            Search Component
            <form>
                <input type='text' name='card name' placeholder='Card Name' /><br></br>
                <input type='text' name='set' placeholder='Card Set' /><br></br>
                <select>
                    <option value='white'>White</option>
                    <option value='blue'>Blue</option>
                    <option value='black'>Black</option>
                    <option value='red'>Red</option>
                    <option value='green'>Green</option>
                </select><br></br>
                <input type='number' name='cmc' placeholder='Converted Mana Cost' /><br></br>
                <input type='text' name='rule text' placeholder='Rule Text' /><br></br>
                <button type='submit'>Search</button>
            </form>
        </div>
    )


}

export default Search;