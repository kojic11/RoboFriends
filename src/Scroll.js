import React from 'react';
import './Scroll.css'

const Scroll = (props) =>{
    return(
        <div style={{overflow:'scroll', height:'800px'}} id='scrolls'>
            {props.children}
        </div>
    );
}
export default Scroll;