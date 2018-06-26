import React, {Component } from 'react';
import './Front.css';


// React component for the front side of the card
class Front extends Component  {
    render() {
      return(
        <div className='card-side side-front'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-xs-6'>
                <img src='https://source.unsplash.com/w8YICpz1I10/358x458' />
              </div>
  
              <div className='col-xs-6 side-front-content'>
                    <h1>Skeleton</h1>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

export default Front;