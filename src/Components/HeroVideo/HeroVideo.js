import React, {useEffect, useRef} from 'react';
import './HeroVideo.css';
import VIDEO from '../../Assets/herovideo.mp4';
import VideoDetails from './VideoDetails/VideoDetails';
import Blob1 from '../Blobs/Blob1';
import Blob2 from '../Blobs/Blob2';
import gsap from 'gsap';
const HeroVideo = () => {
    let videoRef = useRef(null);
    let ref1 = useRef(null)
    let ref2 = useRef(null)
    let ref3 = useRef(null)

    useEffect(()=>{
        const tl= gsap.timeline({paused:true});
        tl.from([videoRef.current], {
           transform:'scale(3)',
           duration:5
        })
        setTimeout(()=>{
            tl.play();
        videoRef.current.play();
        }, 4000);
    });
    return ( 
        <>
        <div className="container heroVideoContainer">
            <div className="videoContainer">
                <div style={{width:'100%'}}>
                    <video src={VIDEO} muted className="videoSRC" ref={videoRef} ></video>
                </div>
            </div>
            <div className="videoDetails">
                <VideoDetails ref={ref1} label="Seasons" value={5} delay={6} duration={3} decimals={0}/>
                <VideoDetails ref={ref2} label="Rating" value={9.5} delay={6.5} duration={2.5} decimals={1}/>
                <VideoDetails ref={ref3} label="Awards" value={92} delay={7} duration={2} decimals={0}/>
            </div>
        </div>
        <div className="blob1">
            <Blob1 />
        </div>
        <div className="blob2">
            <Blob2 />
        </div>
        </>
     );
}
 
export default HeroVideo;