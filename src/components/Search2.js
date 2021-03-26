import React, { useEffect, useState } from 'react'
import Results from './Results'

function Search() {

    let baseUrl = 'https://api.scryfall.com'

    const [cardName, setCardName] = useState('')

    return(
        <div>
            Search Component
            <form>
                <input type='text' name='card name' placeholder='Card Name' /><br></br>
            </form>
        </div>
    )


}

export default Search;