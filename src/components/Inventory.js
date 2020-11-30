import React, { useState, useEffect } from 'react'

function Inventory() {
    
    const [cardResults, setCardResults] = useState([])

    function fetchCards() {
        fetch('https://api.magicthegathering.io/v1/cards')
        .then(resp => resp.json())
        .then(resp => setCardResults(resp.cards))
    }

    useEffect(() => {
        fetchCards()
    }, [])
    
    return(
        <div>
            Inventory Component
            {cardResults
                ? cardResults.map (card => 
                    <div>
                        <h5>{card.name}</h5>
                        <p>Card Type: {card.type}</p>
                        <p>Rarity: {card.rarity}</p>
                        <p>Set: {card.setName}</p>
                        <br></br>
                    </div>
                )
                : null}
        </div>
    )
}

export default Inventory;