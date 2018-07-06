import React, { Component }from 'react';

// import './data.json';


// let data = require('./data.json')

// var attack = data.attack;




class Test extends Component{
    render() {
        return (
            <div>
            
            <h1>{this.props.title}</h1>
            <h2>Has an attack of {this.props.attack} strong.</h2>
            <p>Cats are weird</p>

            

            </div>
            

            



        )
    }
}

export default Test;