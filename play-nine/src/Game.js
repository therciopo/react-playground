import React, { Component } from 'react';
import './Game.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faGoogle, faStar)

const Stars = (props) =>{
    return (
        <div className="col-5">
            <FontAwesomeIcon className='star' icon={faStar} />
            <FontAwesomeIcon className='star' icon={faStar} />
            <FontAwesomeIcon className='star' icon={faStar} />
            <FontAwesomeIcon className='star' icon={faStar} />
        </div>
    );
}
const Button = (props) =>{
    return (
        <div className='col-2'>
            <button>=</button>
        </div>
    );
}
const Answer = (props) =>{
    return (
        <div className='col-5'>
            ...
        </div>
    );
}

const Numbers = (props) =>{
    return (
        <div className='card text-center'>
            <div>
              <span>1</span>
              <span className='selected'>2</span>
              <span className='used'>3</span>
            </div>
        </div>
    );
}


class Game extends Component {
    render(){
        return (
            <div className='container'>
                <h3>Play Nine</h3>
                <hr/>
                <div className='row'>
                    <Stars/>
                    <Button/>
                    <Answer/>
                </div>
                <br/>
                <Numbers/>
            </div>
        );
    }
}

export default Game;