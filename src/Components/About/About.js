import React from 'react';
import './About.css'
const About = () => {
    return ( 
        <>
        <div className="container">
            <div className="aboutContainer">
                Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.
            </div>
            <div style={{display:'flex', marginTop:'5%'}}>
                <div style={{flex:1, borderRight:'1px solid rgba(0, 0, 0, 0.5)', height:'20vh'}}></div>
                <div style={{flex:1, height:'20vh'}}></div>
            </div>
        </div>
        <div>
        <div style={{display:'flex', backgroundColor:'rgba(200, 200, 200, 0.1)'}}>
            <div style={{flex:1, borderRight:'1px solid rgba(0, 0, 0, 0.5)', height:'20vh'}}></div>
                <div style={{flex:1, height:'20vh', position:'relative'}}>
                    <span className="spanText">CHARACTERS</span>
                </div>
            </div>
        </div>
        <hr style={{width:'80%', margin:'auto'}}/>
        </>
     );
}
 
export default About;