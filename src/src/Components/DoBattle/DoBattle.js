import React, { Component } from 'react';

let characterCard = require('./character.json');

import data from './data.json'



document.body.innerText = data.name




class DoBattle extends Component {
    
    constructor (props , props) {
        super(props)
        this state = { character_position : 1}
    }


    

    render(){

        
    const player1 = {this.state.onClick(event.target.value)}

    const player2 = {imported from another component}

    if (player1 > player 2) {
        return {player1 + ", you are the winner of this bout!"};
    } else {
        return {player2 + ", you have defeated your for!"}
    }





        return (
            <div>        
                
 
            </div>


    )
  }
};

export default DoBattle;



{/* This can be made into a function that redoes it for any character?
// const DoBattle = ({attack/*get this from the JSON file, that is clicked*}/, "player 2's attack") => {
//     if (this.state.attack /*player 1*/ > "some other variable that defines player's attack") {
//         return this.state.attack
//     } else {
//         return "some other variable that defines player's attack"
//     }
 //  */}


{
