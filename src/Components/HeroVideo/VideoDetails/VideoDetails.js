import React from 'react';
import CountUp from 'react-countup';
import './VideoDetails.css';
const VideoDetails = (props) => {
    return ( 
        <div className="videoDetailsContainer">
            <div className="videoDetailsLabel">{props.label}</div>
            <div className="videoCountup">
                <CountUp end={props.value} decimals={props.decimals} duration={props.duration} delay={props.delay}/>
            </div>
        </div>
     );
}
 
export default VideoDetails;