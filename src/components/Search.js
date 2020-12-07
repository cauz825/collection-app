import React, { useState } from 'react'

function Search() {

    const [searchTerm, setSearchTerm] = useState("")



    function fetchSearch(searchTerm) {
        fetch(`https://api.magicthegathering.io/v1/cards?name=${searchTerm}`)
        .then(resp => resp.json())
        .then(results => console.log(results))
    }

    function handleSearchTerm(e) {
        setSearchTerm(e.target.value)
    }
    
    function searchCards(e) {
        e.preventDefault();
        fetchSearch(searchTerm)
    }
    
    
    
    return(
        <div>
            Search Component
            <form>
                <input onChange={handleSearchTerm} type='text' name='card name' placeholder='Card Name' />
                <button onClick={searchCards} type='submit'>Search</button>
            </form>
        </div>
    )
}

export default Search;