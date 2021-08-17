import React, { useEffect, useRef } from 'react';
import './FilterDrawer.css';
import gsap from 'gsap';
import {
    RadioGroup,
    FormControlLabel,
    Radio
} from '@material-ui/core';

const FilterDrawer = (props) => {
    let drawerRef = useRef(null);
    let maskRef = useRef(null);
    useEffect(() => {
        if (props.open) {
            const tl = new gsap.timeline({ paused: true });
            tl.to([maskRef.current], { opacity: 1, zIndex: 5, duration: 0.1 });
            tl.to([drawerRef.current], { left: 0, duration: 0.4 });
            tl.play();
        }
        else {
            const tl = new gsap.timeline({ paused: true });
            tl.to([maskRef.current], { opacity: 0, zIndex: -100, duration: 0.1 });
            tl.to([drawerRef.current], { left: -400, duration: 0.4 });
            tl.play();
        }
    }, [props.open])
    return (
        <>
            <div className="filterDrawerContainer" ref={drawerRef}>
                <div className="heading">FILTER</div>
                <hr style={{ width: "80%", margin: 'auto' }} />
                <div style={{ width: '80%', margin: 'auto', marginTop: '5%' }}>
                    <div>
                        <div style={{fontSize:'2em', marginBottom:"5%"}}>Status</div>
                        <hr />

                        <RadioGroup value={props.status} onChange={(e)=>props.setStatus(e.target.value)}>
                            <FormControlLabel value="Alive" control={<Radio />} label="Alive" />
                            <FormControlLabel value="Deceased" control={<Radio />} label="Deceased" />
                            <FormControlLabel value="Any" control={<Radio />} label="Any" />
                        </RadioGroup>
                    </div>
                    <div style={{marginTop:'5%'}}>
                        <div style={{fontSize:'2em', marginBottom:"5%"}}>Category</div>
                        <hr />

                        <RadioGroup value={props.category} onChange={(e)=>props.setCategory(e.target.value)}>
                            <FormControlLabel value="Breaking Bad" control={<Radio />} label="Breaking Bad" />
                            <FormControlLabel value="Better Call Saul" control={<Radio />} label="Better Call Saul" />
                            <FormControlLabel value="Any" control={<Radio />} label="Any" />
                        </RadioGroup>
                    </div>
                </div>
                <div style={{position:'absolute', bottom:'5%', width:"80%", left:'10%'}}>
                    <button onClick={()=>props.setOpen(false)}
                    style={{width:"100%", border:'none', outline:'none', backgroundColor:"black", color:"white", padding:"1em", cursor:'pointer'}}>Apply Filters</button>
                </div>
            </div>
            <div className="drawermask" ref={maskRef} onClick={() => props.setOpen(false)}>

            </div>
        </>
    );
}

export default FilterDrawer;