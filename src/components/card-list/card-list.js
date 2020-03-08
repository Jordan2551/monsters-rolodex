import React from 'react';
import './card-list.css';
import Card from '../card/card';

export const CardList = (props) => {
    function getMonsters(){
        const monsterList = props.monsters.map((monster) => {return <Card key={monster.id} monster={monster}/>});
        return monsterList;
    }
    return(
        <div className='card-list'>
            {getMonsters()}
        </div>
    );
};
