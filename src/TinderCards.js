import { SwipeableDrawer } from '@material-ui/core';
import React, { useState } from 'react';
import TinderCard from "react-tinder-card"
import './TinderCards.css';

function TinderCards() {
    const [people,setPeople] = useState([
        {
            'name':'Elon musk',
            'url':'https://crm.mp2it.in/public/storage/uploads/images/ajay-joshi_1617621184.jpg'
        },
        {
            'name':'Bill Gates',
            'url':'https://crm.mp2it.in/public/storage/uploads/images/ajay-joshi_1617621184.jpg'
        }

    ]);

    const swiped = (direction,nameToDelete)=>{
      console.log('removing:'+nameToDelete) ;
     // setLastDirection(direction); 
    };

    const outOfFrame =(name)=>{
        console.log(name + "left the screen!");
    };

    return (
        <div className="tinderCards">
            {people.map((person)=>(
            <TinderCard className="swipe"
            key={person.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir)=>swiped(dir,person.name)} 
            onCardLeftScreen={()=>outOfFrame(person.name)}> 
<div style={{ backgroundImage:`url(${person.url})` }} className="card">
<h3>{person.name}</h3>
</div>

            </TinderCard>            
            
            ))}
        </div>
    )
}

export default TinderCards
