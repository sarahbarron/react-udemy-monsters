import React from "react";
import "./card-list.style.css";
//  Import the Card Component to be used inside the list of cards
import { Card } from "../card/card.component";
// props being passed are the list of monsters

export const CardList = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        //   Using the Card Component we have to pass the monster
        // into the card to be used and give it a key
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
