import React from 'react';
import CSS from './userOutput.css';
const userOutput = props=>
{
    return(
        <div  className={CSS.demo}>
            <p onClick={props.click}> Hello My name is <span id='demo1'>{props.name}</span></p>
        </div>
    )
}
export default userOutput;