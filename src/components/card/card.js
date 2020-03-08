import React from 'react';
import './card.css';
const five = 5;
const ten = 10;
const Card = (props) => {
    const url = "https://robohash.org/"+props.monster.id + 1 +"?set=set2";
    return(
        <div class="card-container">
            <img alt="monster" src={url}/>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    );
}

export default Card;
