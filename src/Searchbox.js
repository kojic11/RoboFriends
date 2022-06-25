import React from 'react';
import './search.css'
 
const Searchbox = ({searchfield, search}) =>{
    return(
        <div className='pa2'>
            <input className='pa3 ba' type='search' placeholder='Search for robots' onChange={search}/>
            
        </div>
    );


};

export default Searchbox;