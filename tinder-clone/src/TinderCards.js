import { SwipeableDrawer } from '@material-ui/core';
import React from 'react'
import { useState } from 'react'
import TinderCard  from 'react-tinder-card'
import './TinderCards.css'

function TinderCards() {
  const [people, setPeople] =  useState([
    {

    name: 'Elon Musk',
    url:"https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102",
    },



    {

      name: 'Jeff Bezos',
      url:"https://images.moneycontrol.com/static-mcnews/2018/05/Jeff-Bezos-770x433.jpg?impolicy=website&width=770&height=431",
      },

      {

        name: 'Bill Gates',
        url:"https://static01.nyt.com/images/2021/05/17/business/14altGates-print/merlin_183135423_1167fa8a-7940-427e-b690-68876010d286-jumbo.jpg?quality=90&auto=webp",
        },
        {

          name: 'Shawn Mendes',
          url:"https://images.indulgexpress.com/uploads/user/imagelibrary/2019/5/9/original/ShawnMendes.jpg?w=576&dpr=1.3",
          },


]);


const swiped = (direction, nameToDelete) => {
  console.log("Removing :"+ nameToDelete);


};

const outOfFrame = (name) => {
  console.log(name + "left of the screen!");
};
  return (
  <div className="tinderCards">
    <div className="tinderCards___cardContainer">


    {people.map((person) =>(
   <TinderCard
   className="swipe"
   key={person.name}
   preventSwipe={["up", "down"]}

   onSwipe={(dir) => swiped(dir,person.name)}
   onCardLeftScreen={() => outOfFrame(person.name)}
   >
     <div style={{backgroundImage : "url(" + person.url + ")"}} className="cards">

  <h3>{person.name}</h3>
     </div>

   </TinderCard>
    ))}
     </div>
    
  </div>
  );
}

export default TinderCards
