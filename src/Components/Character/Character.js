import React, {useState} from 'react';
import './Character.css';
import {Redirect} from 'react-router-dom';
const Character = (props) => {
    const [redirect, setRedirect] = useState(false);
    const occupations=props.occupation?props.occupation.map((i, k)=><div style={{textAlign:'right', fontSize:'1.5em'}} key={k}>{i}</div>):null
    
    if (redirect) {
        return <Redirect
            to={{
                pathname: `/character`,
                state: { id:props.id }
            }}
        />
    }
    return ( 
        <div className="characterPane" onClick={()=>setRedirect(true)}>
            <img src={props.img} alt={props.name} style={{width:"100%", height:'80vh'}}/>
            <div className="characterOverlay">
                <div className="topContainer">
                {occupations}
                </div>
                <div className="bottomContainer">
                    <div className="overlayStatus">{props.status}</div>
                    <div className="overlayName">{props.name}</div>
                </div>
                <div className="overlayBirthday">
                    {props.birthday==="Unknown"?null:props.birthday}
                </div>
            </div>
        </div>
     );
}
 
export default Character;