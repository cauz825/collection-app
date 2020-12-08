import React from 'react'

function Results(props) {
    
    return(
        <div>
            Results Component
            {props.searchResults.cards
                ? props.searchResults.cards.map (card => 
                    <div>
                        <img src={card.imageUrl} alt="" />
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

export default Results;