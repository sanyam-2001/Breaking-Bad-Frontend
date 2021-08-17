import React from 'react';
import {FaFilter} from 'react-icons/fa'

const Filter = () => {
    return ( 
        <div>
            <button style={{
                width:'100%',
                outline:'none',
                border:'none',
                padding:'0.5em',
                cursor:'pointer',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                fontFamily:'IBM Plex Serif',
                fontSize:'1.5em',
                backgroundColor: 'rgba(31, 31, 31, 0.829)',
                color:'white'
            }}>
                <FaFilter/> <span style={{marginLeft:"1em"}}>FILTER</span>
            </button>
        </div>
     );
}
 
export default Filter;