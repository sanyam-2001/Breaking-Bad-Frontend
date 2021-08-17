import React from 'react';
import './Blockquote.css'
const Blockquote = (props) => {
    return (
        <blockquote className='padding'>
            <div className='blockquote-content padding'>
                <p className='oblique'>
                    {props.text}
                </p>
            </div>
        </blockquote>
    );
}

export default Blockquote;