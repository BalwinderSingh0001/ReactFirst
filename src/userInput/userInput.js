import React from 'react';
import CSS from './userInput.css';
const userInput=props=>
{
    return(
        <div className={CSS.input}>
            <label>Enter name</label>
            <input type='text' onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default userInput;