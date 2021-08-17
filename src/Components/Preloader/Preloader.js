import React, {useEffect, useRef} from 'react';
import './Preloader.css'
import gsap from 'gsap';
const Preloader = () => {
    let preloaderRef = useRef(null);
    let textRef = useRef(null);
    let secondaryRef = useRef(null);
    useEffect(()=>{
        const tl = gsap.timeline({paused:true});
        tl.from([textRef.current], {transform:'transform(-50%, -70%)', opacity:0, duration:1})
        tl.to([textRef.current], {transform:'transform(-50%, -30%)', opacity:0, duration:1})
        tl.to([preloaderRef.current], {transform:'scaleY(0)', transformOrigin:'top', duration:1})
        tl.to([secondaryRef.current], {transform:'scaleY(0)', transformOrigin:'top', duration:1})

        tl.play();
    }, []);
    return ( 
        <>
            <div className="preloader" ref={preloaderRef}>
                <div style={{
                    fontFamily:"IBM Plex Serif",
                    fontSize:"4em",
                    position:'absolute',
                    top:'50%',
                    left:"50%",
                    transform:'translate(-50%, -50%)'
                 }} ref={textRef}>Hi, I'm Preloader</div>
            </div>
            <div ref={secondaryRef} style={{
                position:'absolute',
                top:0,
                left:0,
                width:'100%',
                height:"100vh",
                backgroundColor:'#90F3EE',
                zIndex:400
            }}></div>
        </>

     );
}
 
export default Preloader;